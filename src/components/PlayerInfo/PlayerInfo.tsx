import { formatTime } from '../../helpers/formatTime';
import { PlayerInfoProps } from './PlayerInfo.props';
import styles from './PlayerInfo.module.css';
import { useReactiveVar } from '@apollo/client';
import { PlayerStore } from '../../store/PlayerStore';
import { ChangeEvent } from 'react';

const { currentTimeVar, canChangeTimeVar, audio, durationVar, currentTrackVar } = PlayerStore;

const computeDuration = (currentTime: number, duration: number): number => {
  const result = Math.round((currentTime * 100) / duration);
  if (!result) return 0;
  return Math.round((currentTime * 100) / duration);
};

export const PlayerInfo = ({}: PlayerInfoProps): JSX.Element => {
  const canChangeTime = useReactiveVar(canChangeTimeVar);
  const duration = useReactiveVar(durationVar);
  const currentTrack = useReactiveVar(currentTrackVar);
  const currentTime = useReactiveVar(currentTimeVar);

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    if (canChangeTime) {
      const timeCompute = (+event.target.value * duration) / 100;
      currentTimeVar(timeCompute);
      audio.currentTime = timeCompute;
    }
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
      <input
        aria-label="audio current time"
        type="range"
        disabled={!canChangeTime}
        onChange={handleProgress}
        value={computeDuration(currentTime, duration)}
      />
    </div>
  );
};