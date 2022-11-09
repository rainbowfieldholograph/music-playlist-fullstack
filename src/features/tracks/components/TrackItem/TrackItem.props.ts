import type { Track } from '../../../../generated';

export type TrackItemProps = {
  track: Track;
  isActive: boolean;
  changeTrackHandler: (track: Track) => void;
};
