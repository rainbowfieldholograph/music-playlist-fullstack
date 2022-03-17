import { makeVar } from '@apollo/client';
import { Track } from '../generated';

export type CurrentTrack = Track | null;
export type IsPlaying = boolean;
export type CanChangeTime = boolean;
export type Volume = number;
export type CurrentTime = number;
export type Duration = number;

type SwitchTrackActions = 'NEXT' | 'PREV';
type Playlist = Track[] | undefined;

class PlayerStore {
  audio = new Audio();

  currentTrackVar = makeVar<CurrentTrack>(null);

  isPlayingVar = makeVar<IsPlaying>(false);
  canChangeTimeVar = makeVar<CanChangeTime>(true);

  volumeVar = makeVar<Volume>(0.5);
  currentTimeVar = makeVar<CurrentTime>(0);
  durationVar = makeVar<Duration>(0);

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
}

export default new PlayerStore();
