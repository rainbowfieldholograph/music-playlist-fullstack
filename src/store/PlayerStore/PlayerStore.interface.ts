import { ReactiveVar } from '@apollo/client';
import { Track } from '../../generated';
import { Playlist, SwitchTrackActions } from './PlayerStore.d';

export interface IPlayerStore {
  audio: HTMLAudioElement;
  currentTrackVar: ReactiveVar<Track | null>;
  isPlayingVar: ReactiveVar<boolean>;
  canChangeTimeVar: ReactiveVar<boolean>;
  volumeVar: ReactiveVar<number>;
  currentTimeVar: ReactiveVar<number>;
  durationVar: ReactiveVar<number>;

  switchTrack: (playlist: Playlist, action: SwitchTrackActions) => void;
  prevTrack: (playlist: Playlist) => void;
  nextTrack: (playlist: Playlist) => void;
  toggleAudio: () => Promise<void>;
  initializeAudio: (src: string, playlist: Playlist) => void;
  changeVolume: (newVolume: number) => void;
}
