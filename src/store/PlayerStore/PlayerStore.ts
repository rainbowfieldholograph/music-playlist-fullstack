import { makeVar } from '@apollo/client';
import { Track } from '../../generated';
import { Playlist, SwitchTrackActions } from './PlayerStore.d';
import { IPlayerStore } from './PlayerStore.interface';

class PlayerStore implements IPlayerStore {
  private DISABLE_TIME = 500; // optimal value 500+
  private DEFAULT_VOLUME = 0.2; //can be only 0.0 -> 1.0
  private prevTimerId: null | number = null;
  private audio = new Audio();

  currentTrackVar = makeVar<Track | null>(null);
  isPlayingVar = makeVar<boolean>(false);
  canChangeTimeVar = makeVar<boolean>(true);
  volumeVar = makeVar<number>(this.DEFAULT_VOLUME);
  currentTimeVar = makeVar<number>(0);
  durationVar = makeVar<number>(0);

  switchTrack = (playlist: Playlist, action: SwitchTrackActions) => {
    const currentTrack = this.currentTrackVar();

    if (!playlist || !currentTrack) return;

    const playlistLastIndex = playlist.length - 1;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);

    switch (action) {
      case 'NEXT':
        currentIndex === playlistLastIndex
          ? this.currentTrackVar(playlist[0])
          : this.currentTrackVar(playlist[currentIndex + 1]);
        break;
      case 'PREV':
        currentIndex === 0
          ? this.currentTrackVar(playlist[playlistLastIndex])
          : this.currentTrackVar(playlist[currentIndex - 1]);
        break;
    }
  };

  changeCurrentTime = (newValue: number) => {
    if (this.canChangeTimeVar()) {
      this.currentTimeVar(newValue);
      this.audio.currentTime = newValue;
    }
  };

  changeVolume = (newValue: number) => {
    this.audio.volume = newValue;
    this.volumeVar(newValue);
  };

  changePlaying = (play: boolean) => (play ? this.audio.play() : this.audio.pause());

  toggleAudio = () => this.changePlaying(!this.isPlayingVar());

  prevTrack = (playlist: Playlist) => this.switchTrack(playlist, 'PREV');
  nextTrack = (playlist: Playlist) => this.switchTrack(playlist, 'NEXT');

  initializeAudio = (src: string, playlist: Playlist) => {
    this.audio.src = src;
    this.audio.ontimeupdate = () => this.currentTimeVar(this.audio.currentTime);
    this.audio.onloadeddata = () => {
      this.audio.play();

      if (this.prevTimerId) clearTimeout(this.prevTimerId);
      this.prevTimerId = setTimeout(() => {
        this.canChangeTimeVar(true);
      }, this.DISABLE_TIME);
    };
    this.audio.onloadedmetadata = () => {
      this.durationVar(this.audio.duration);
    };
    this.audio.onended = () => {
      this.canChangeTimeVar(false);
      this.nextTrack(playlist);
    };
    this.audio.onplay = () => this.isPlayingVar(true);
    this.audio.onpause = () => this.isPlayingVar(false);
    this.audio.volume = this.volumeVar();
  };
}

const PlayerStoreInstance = new PlayerStore();

export { PlayerStoreInstance as PlayerStore };
