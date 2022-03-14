import { ChangeEventHandler } from 'react';
import { Track } from '../../generated';

export interface PlayerInfoProps {
  track: Track;
  duration: number;
  currentTime: number;
  handleProgress: ChangeEventHandler<HTMLInputElement>;
  canChangeTime: boolean;
}
