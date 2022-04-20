import { useReactiveVar } from '@apollo/client';
import { ChangeEvent } from 'react';
import { formatTime } from '../../helpers/formatTime';
import { PlayerStore } from '../../store/PlayerStore';
import { Slider } from '../Slider';
import { PlayerInfoProps } from './PlayerInfo.props';
import styles from './PlayerInfo.module.css';

const { currentTimeVar, canChangeTimeVar, durationVar, currentTrackVar, changeCurrentTime } =
  PlayerStore;

const computeDuration = (currentTime: number, duration: number): number => {
  const result = Math.round((currentTime * 100) / duration);
  return isNaN(result) ? 0 : result;
};

export const PlayerInfo = ({}: PlayerInfoProps): JSX.Element => {
  const canChangeTime = useReactiveVar(canChangeTimeVar);
  const duration = useReactiveVar(durationVar);
  const currentTrack = useReactiveVar(currentTrackVar);
  const currentTime = useReactiveVar(currentTimeVar);

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const timeCompute = (+event.target.value * duration) / 100;
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
