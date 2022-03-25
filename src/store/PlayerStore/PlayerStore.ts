import { makeVar } from '@apollo/client';
import { Track } from '../../generated';
import { Playlist, SwitchTrackActions } from './PlayerStore.d';
import { IPlayerStore } from './PlayerStore.interface';

class PlayerStore implements IPlayerStore {
  private DISABLE_TIME: number = 200;
  private DEFAULT_VOLUME: number = 0.2;

  audio = new Audio();

  currentTrackVar = makeVar<Track | null>(null);
  isPlayingVar = makeVar<boolean>(false);
  canChangeTimeVar = makeVar<boolean>(true);
  volumeVar = makeVar<number>(this.DEFAULT_VOLUME);
  currentTimeVar = makeVar<number>(0);
  durationVar = makeVar<number>(0);

  switchTrack = (playlist: Playlist, action: SwitchTrackActions) => {
    const currentTrack = this.currentTrackVar();
    if (!playlist || !currentTrack) return;
    const currentIndex = playlist.findIndex((t) => t.id === currentTrack.id);
    switch (action) {
      case 'NEXT':
        currentIndex === playlist.length - 1
          ? this.currentTrackVar(playlist[0])
          : this.currentTrackVar(playlist[currentIndex + 1]);
        break;
      case 'PREV':
        currentIndex === 0
          ? this.currentTrackVar(playlist[playlist.length - 1])
          : this.currentTrackVar(playlist[currentIndex - 1]);
        break;
    }
  };

  prevTrack = (playlist: Playlist) => this.switchTrack(playlist, 'PREV');
  nextTrack = (playlist: Playlist) => this.switchTrack(playlist, 'NEXT');

  toggleAudio = async () => {
    if (this.audio.paused) {
      this.isPlayingVar(true);
      try {
        await this.audio.play();
      } catch (error) {
        console.log(error);
      }
    } else {
      this.isPlayingVar(false);
      this.audio.pause();
    }
  };

  initializeAudio = (src: string, playlist: Playlist) => {
    this.audio.src = src;
    this.audio.ontimeupdate = () => this.currentTimeVar(this.audio.currentTime);
    this.audio.onloadeddata = () => {
      setTimeout(() => {
        this.canChangeTimeVar(true);
      }, this.DISABLE_TIME);
      this.durationVar(this.audio.duration);
    };
    this.audio.onended = () => {
      this.canChangeTimeVar(false);
      this.nextTrack(playlist);
    };
    this.audio.volume = this.volumeVar();
  };
}

const PlayerStoreInstance = new PlayerStore();

export { PlayerStoreInstance as PlayerStore };
