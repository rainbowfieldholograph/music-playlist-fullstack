import { ChangeEventHandler } from 'react';
import { Track } from '../../generated';
import { CurrentTime, Duration } from '../../graphql/localState';

export interface PlayerInfoProps {
  track: Track;
  duration: Duration;
  currentTime: CurrentTime;
  handleProgress: ChangeEventHandler<HTMLInputElement>;
  canChangeTime: boolean;
}
