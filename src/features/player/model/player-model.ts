import { makeVar, useReactiveVar } from '@apollo/client';
import { getRandomInteger, overflowBetween, clamp } from 'utils';
import type { Track } from 'generated';

type SwitchTrackActions = 'NEXT' | 'PREV' | 'RANDOM';

type KeyActions = {
  [key in SwitchTrackActions]: number;
};

export class PlayerModel {
  private readonly DISABLE_TIME_MS = 500; // optimal value 500+
  private readonly DEFAULT_VOLUME = 0.2; // can be only 0.0 -> 1.0

  private prevTimerId: null | number = null;
  private prevSrc: null | string = null;
  private audio = new Audio();
  private currentPlaylist: Track[] | null = null;

  // Apollo Reactive Variables
  private currentTrackVar = makeVar<Track | null>(null);
  private isPlayingVar = makeVar<boolean>(false);
  // isRepeatVar = makeVar<boolean>(false);
  private isRandomVar = makeVar<boolean>(false);
  private canChangeTimeVar = makeVar<boolean>(false);
  private volumeVar = makeVar<number>(this.DEFAULT_VOLUME);
  private currentTimeVar = makeVar<number>(0);
  private durationVar = makeVar<number>(0);

  private switchTrack = (action: SwitchTrackActions) => {
    const currentTrack = this.currentTrackVar();
    const playlist = this.currentPlaylist;

    if (!playlist || !currentTrack) return;

    const lastIndex = playlist.length - 1;
    const currentIndex = playlist.findIndex(({ id }) => id === currentTrack.id);

    const actionsDict: KeyActions = {
      NEXT: overflowBetween(currentIndex + 1, 0, lastIndex),
      PREV: overflowBetween(currentIndex - 1, 0, lastIndex),
      RANDOM: getRandomInteger(0, lastIndex),
    };

    const newIndex = actionsDict[action];

    this.currentTrackVar(playlist[newIndex]);
  };

  changeCurrentTime = (newValue: number) => {
    const { duration } = this.audio;
    const preventChange =
      !this.canChangeTimeVar() || !this.currentTrackVar() || isNaN(duration);

    if (preventChange) return;

    const currentTimeValue = clamp(newValue, 0, duration);
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

  changeCurrentTrack = (track: Track) => {
    this.currentTrackVar(track);
  };

  updateCurrentTime = (value: number) => {
    this.changeCurrentTime(this.currentTimeVar() + value);
  };

  updateVolume = (value: number) => {
    this.changeVolume(this.volumeVar() + value);
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
    if (src !== this.prevSrc) {
      this.audio.src = src;
      this.prevSrc = src;
    }

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

  // React Hooks
  useCurrentTrack = () => {
    return useReactiveVar(this.currentTrackVar);
  };

  useIsPlaying = () => {
    return useReactiveVar(this.isPlayingVar);
  };

  useIsRandom = () => {
    return useReactiveVar(this.isRandomVar);
  };

  useCanChangeTime = () => {
    return useReactiveVar(this.canChangeTimeVar);
  };

  useVolume = () => {
    return useReactiveVar(this.volumeVar);
  };

  useCurrentTime = () => {
    return useReactiveVar(this.currentTimeVar);
  };

  useDuration = () => {
    return useReactiveVar(this.durationVar);
  };
}
