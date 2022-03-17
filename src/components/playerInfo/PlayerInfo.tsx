import { formatTime } from '../../helpers/formatTime';
import { PlayerInfoProps } from './PlayerInfo.props';
import styles from './PlayerInfo.module.css';
import { useReactiveVar } from '@apollo/client';
import PlayerStore from '../../graphql/PlayerStore';
import { ChangeEvent } from 'react';

const { currentTimeVar, canChangeTimeVar, audio, durationVar } = PlayerStore;

const computeDuration = (currentTime: number, duration: number): number => {
  const result = Math.round((currentTime * 100) / duration);
  if (!result) return 0;
  return Math.round((currentTime * 100) / duration);
};

export const PlayerInfo = ({ track }: PlayerInfoProps): JSX.Element => {
  const canChangeTime = useReactiveVar(canChangeTimeVar);
  const duration = useReactiveVar(durationVar);

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    if (canChangeTime) {
      const timeCompute = (+event.target.value * duration) / 100;
      currentTimeVar(timeCompute);
      audio.currentTime = timeCompute;
    }
  };

  const currentTime = useReactiveVar(currentTimeVar);
  return (
    <div className={styles.info}>
      <div className={styles.box}>
        <h2 className={styles.title}>{track.title}</h2>
        <p>{formatTime(duration)}</p>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{track.author}</h3>
        <p>{formatTime(currentTime)}</p>
      </div>
      <input
        type="range"
        disabled={!canChangeTime}
        onChange={handleProgress}
        value={computeDuration(currentTime, duration)}
      />
    </div>
  );
};
