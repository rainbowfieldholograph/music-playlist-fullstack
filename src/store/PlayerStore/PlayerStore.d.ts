import { Track } from '../../generated';

export type SwitchTrackActions = 'NEXT' | 'PREV' | 'RANDOM';
export type Playlist = Track[] | undefined;
