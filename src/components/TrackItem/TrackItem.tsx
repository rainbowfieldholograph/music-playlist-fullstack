import clsx from 'clsx';
import styles from './TrackItem.module.css';
import { TrackItemProps } from './TrackItem.props';

export const TrackItem = ({
  title,
  isActive,
  author,
  onClick,
}: TrackItemProps): JSX.Element => {
  const trackLabel = `Play audio: ${author} - ${title}`;

  return (
    <button
      aria-label={trackLabel}
      title={trackLabel}
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
