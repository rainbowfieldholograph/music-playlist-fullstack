import { useReactiveVar } from '@apollo/client';
import { formatTime } from '../../../../helpers/formatTime';
import { playerStore } from '../../../../stores';
import { Slider } from '../../../Slider';
import styles from './PlayerInfo.module.scss';
import type { ChangeEvent, FC } from 'react';

const {
  currentTimeVar,
  canChangeTimeVar,
  durationVar,
  currentTrackVar,
  changeCurrentTime,
} = playerStore;

const computeDuration = (currentTime: number, duration: number): number => {
  const result = Math.round((currentTime * 100) / duration);
  return isNaN(result) ? 0 : result;
};

export const PlayerInfo: FC = () => {
  const canChangeTime = useReactiveVar(canChangeTimeVar);
  const duration = useReactiveVar(durationVar);
  const currentTrack = useReactiveVar(currentTrackVar);
  const currentTime = useReactiveVar(currentTimeVar);

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const progressValue = +event.target.value;
    const timeCompute = (progressValue * duration) / 100;
    changeCurrentTime(timeCompute);
  };

  return (
    <div className={styles.info}>
      <div className={styles.box}>
        <h2 className={styles.title}>{currentTrack?.title}</h2>
        <p>{formatTime(duration)}</p>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{currentTrack?.author}</h3>
        <p>{formatTime(currentTime)}</p>
      </div>
      <Slider
        aria-label="Audio current time handler"
        title="Audio current time handler"
        disabled={!canChangeTime}
        onChange={handleProgress}
        value={computeDuration(currentTime, duration)}
      />
    </div>
  );
};
