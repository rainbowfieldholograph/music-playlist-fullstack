import clsx from 'clsx';
import styles from './TrackItem.module.css';
import { TrackItemProps } from './TrackItem.props';

export const TrackItem = ({
  title,
  isActive,
  author,
  onClick,
}: TrackItemProps): JSX.Element => {
  return (
    <button
      aria-label={`Play audio: ${author} - ${title}`}
      onClick={() => onClick()}
      className={clsx(styles.track, { [styles.active]: isActive })}
    >
      <div className={styles.trackBox} />
      <div className={styles.info}>
        <p className={styles.text}>{title}</p>
        <p className={styles.text}>{author}</p>
      </div>
    </button>
  );
};
