import { Track } from '../../generated';

export type CurrentTrack = Track | null;
export type IsPlaying = boolean;
export type CanChangeTime = boolean;
export type Volume = number;
export type CurrentTime = number;
export type Duration = number;

export type SwitchTrackActions = 'NEXT' | 'PREV';
export type Playlist = Track[] | undefined;
