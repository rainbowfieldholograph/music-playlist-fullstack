import { makeVar } from '@apollo/client';
import { getRandomInteger } from '../../helpers/randomInteger';
import type { Track } from '../../generated';
import type { SwitchTrackActions } from './PlayerStore.d';

type ActionsType = {
  [key in SwitchTrackActions]: () => void;
};

class PlayerStore {
  private readonly DISABLE_TIME = 500; // optimal value 500+
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

    const actions: ActionsType = {
      NEXT: () => {
        currentIndex === lastIndex
          ? this.currentTrackVar(playlist[0])
          : this.currentTrackVar(playlist[currentIndex + 1]);
      },
      PREV: () => {
        currentIndex === 0
          ? this.currentTrackVar(playlist[lastIndex])
          : this.currentTrackVar(playlist[currentIndex - 1]);
      },
      RANDOM: () => {
        this.currentTrackVar(playlist[getRandomInteger(0, lastIndex)]);
      },
    };

    actions[action]();
  };

  changeCurrentTime = (newValue: number) => {
    if (!this.canChangeTimeVar() || !this.currentTrackVar()) return;

    let actualNewValue = newValue;
    if (newValue < 0) actualNewValue = 0;
    if (newValue > this.audio.duration) actualNewValue = this.audio.duration;

    this.currentTimeVar(actualNewValue);
    this.audio.currentTime = actualNewValue;
  };

  changeVolume = (newValue: number) => {
    if (!this.currentTrackVar()) return;

    let actualNewValue = newValue;
    if (newValue < 0) actualNewValue = 0;
    if (newValue > 1) actualNewValue = 1;

    this.volumeVar(actualNewValue);
    this.audio.volume = actualNewValue;
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
      this.prevTimerId = setTimeout(() => this.canChangeTimeVar(true), this.DISABLE_TIME);
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

const PlayerStoreInstance = new PlayerStore();

export { PlayerStoreInstance as PlayerStore };
