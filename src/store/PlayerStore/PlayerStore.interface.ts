import { ReactiveVar } from '@apollo/client';
import { Track } from '../../generated';
import { Playlist, SwitchTrackActions } from './PlayerStore.d';

export interface IPlayerStore {
  currentTrackVar: ReactiveVar<Track | null>;
  isPlayingVar: ReactiveVar<boolean>;
  canChangeTimeVar: ReactiveVar<boolean>;
  volumeVar: ReactiveVar<number>;
  currentTimeVar: ReactiveVar<number>;
  durationVar: ReactiveVar<number>;

  switchTrack: (playlist: Playlist, action: SwitchTrackActions) => void;

  changeVolume: (newVolume: number) => void;
  changeCurrentTime: (newValue: number) => void;
  changePlaying: (play: boolean) => void;

  toggleAudio: () => void;
  prevTrack: (playlist: Playlist) => void;
  nextTrack: (playlist: Playlist) => void;

  initializeAudio: (src: string, playlist: Playlist) => void;
}
