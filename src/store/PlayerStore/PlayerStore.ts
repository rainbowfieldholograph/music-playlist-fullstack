import { makeVar } from '@apollo/client';
import { getRandomInteger } from '../../helpers/randomInteger';
import { overflowBetween } from '../../helpers/overflowBetween';
import { clamp } from '../../helpers/clamp';
import type { Track } from '../../generated';

type SwitchTrackActions = 'NEXT' | 'PREV' | 'RANDOM';

type NewIndexes = {
  [key in SwitchTrackActions]: number;
};

class PlayerStore {
  private readonly DISABLE_TIME_MS = 500; // optimal value 500+
  private readonly DEFAULT_VOLUME = 0.2; // can be only 0.0 -> 1.0
  private prevTimerId: null | number = null;
  private audio = new Audio();
  private currentPlaylist: Track[] | null = null;

  currentTrackVar = makeVar<Track | null>(null);
  isPlayingVar = makeVar<boolean>(false);
  // isRepeatVar = makeVar<boolean>(false);
  isRandomVar = makeVar<boolean>(false);
  canChangeTimeVar = makeVar<boolean>(false);
  volumeVar = makeVar<number>(this.DEFAULT_VOLUME);
  currentTimeVar = makeVar<number>(0);
  durationVar = makeVar<number>(0);

  private switchTrack = (action: SwitchTrackActions) => {
    const currentTrack = this.currentTrackVar();
    const playlist = this.currentPlaylist;

    if (!playlist || !currentTrack) return;

    const lastIndex = playlist.length - 1;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);

    const newIndexes: NewIndexes = {
      NEXT: overflowBetween(currentIndex + 1, 0, lastIndex),
      PREV: overflowBetween(currentIndex - 1, 0, lastIndex),
      RANDOM: getRandomInteger(0, lastIndex),
    };

    this.currentTrackVar(playlist[newIndexes[action]]);
  };

  changeCurrentTime = (newValue: number) => {
    if (!this.canChangeTimeVar() || !this.currentTrackVar()) return;
    const currentTimeValue = clamp(newValue, 0, this.audio.duration);
    this.currentTimeVar(currentTimeValue);
    this.audio.currentTime = currentTimeValue;
  };

  changeVolume = (newValue: number) => {
    if (!this.currentTrackVar()) return;
    const volumeValue = clamp(newValue, 0, 1);
    this.volumeVar(volumeValue);
    this.audio.volume = volumeValue;
  };

  changePlaying = (play: boolean) => {
    if (!this.currentTrackVar()) return;

    if (play) {
      this.isPlayingVar(true);
      this.audio.play();
    } else {
      this.isPlayingVar(false);
      this.audio.pause();
    }
  };

  toggleAudio = () => {
    if (!this.currentTrackVar()) return;

    this.changePlaying(!this.isPlayingVar());
  };

  toggleRandom = () => {
    if (!this.currentTrackVar()) return;

    this.isRandomVar(!this.isRandomVar());
  };

  prevTrack = () => {
    if (this.isRandomVar()) return this.switchTrack('RANDOM');

    this.switchTrack('PREV');
  };

  nextTrack = () => {
    if (this.isRandomVar()) return this.switchTrack('RANDOM');

    this.switchTrack('NEXT');
  };

  initializeAudio = (src: string, playlist: Track[]) => {
    this.audio.src = src;
    this.currentPlaylist = [...playlist];

    this.audio.ontimeupdate = () => this.currentTimeVar(this.audio.currentTime);
    this.audio.onloadeddata = () => {
      if (this.isPlayingVar()) {
        this.audio.play();
        this.isPlayingVar(true);
      }

      if (this.prevTimerId) clearTimeout(this.prevTimerId);
      this.prevTimerId = setTimeout(
        () => this.canChangeTimeVar(true),
        this.DISABLE_TIME_MS
      );
    };

    this.audio.onloadedmetadata = () => {
      this.durationVar(this.audio.duration);
    };

    this.audio.onended = () => {
      this.canChangeTimeVar(false);
      this.nextTrack();
    };

    this.audio.volume = this.volumeVar();
  };
}

export const playerStore = new PlayerStore();
