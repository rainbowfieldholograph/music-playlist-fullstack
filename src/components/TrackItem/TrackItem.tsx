import clsx from 'clsx';
import { FC } from 'react';
import styles from './TrackItem.module.scss';
import { TrackItemProps } from './TrackItem.props';

export const TrackItem: FC<TrackItemProps> = ({ title, isActive, author, onClick }) => {
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
