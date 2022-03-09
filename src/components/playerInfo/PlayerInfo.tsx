import { formatTime } from '../../helpers/formatTime';
import styles from './PlayerInfo.module.css';
import { PlayerInfoProps } from './PlayerInfo.props';

export const PlayerInfo = ({
  track,
  duration,
  currentTime,
  handleProgress,
  canChangeTime,
}: PlayerInfoProps): JSX.Element => {
  return (
    <div className={styles.info}>
      <div className={styles.infoInnerBox}>
        <h2 className={styles.title}>{track?.title}</h2>
        <p>{formatTime(duration)}</p>
      </div>
      <div className={styles.infoInnerBox}>
        <h3 className={styles.title}>{track?.author}</h3>
        <p>{formatTime(currentTime)}</p>
      </div>
      <input
        className={styles.progressBar}
        type="range"
        disabled={!canChangeTime}
        onChange={handleProgress}
        value={duration ? Math.round((currentTime * 100) / duration) : 0}
      />
    </div>
  );
};
