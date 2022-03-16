import { formatTime } from '../../helpers/formatTime';
import styles from './PlayerInfo.module.css';
import { PlayerInfoProps } from './PlayerInfo.props';

const computeDuration = (currentTime: number, duration: number): number => {
  return duration ? Math.round((currentTime * 100) / duration) : 0;
};

export const PlayerInfo = ({
  track,
  duration,
  currentTime,
  handleProgress,
  canChangeTime,
}: PlayerInfoProps): JSX.Element => {
  return (
    <div className={styles.info}>
      <div className={styles.box}>
        <h2 className={styles.title}>{track?.title}</h2>
        <p>{formatTime(duration)}</p>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{track?.author}</h3>
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
