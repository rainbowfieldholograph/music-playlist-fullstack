import clsx from 'clsx';
import { FC, memo } from 'react';
import styles from './TrackItem.module.scss';
import type { TrackItemProps } from './TrackItem.props';

export const TrackItem: FC<TrackItemProps> = memo(({ track, isActive, changeTrackHandler }) => {
  const { author, title } = track;

  const trackLabel = `Play audio: ${author} - ${title}`;

  const onClickTrack = () => {
    changeTrackHandler(track);
  };

  return (
    <button
      aria-label={trackLabel}
      title={trackLabel}
      onClick={onClickTrack}
      className={clsx(styles.track, { [styles.active]: isActive })}
    >
      <div className={styles.trackBox} />
      <div className={styles.info}>
        <p className={styles.text}>{title}</p>
        <p className={styles.text}>{author}</p>
      </div>
    </button>
  );
});

TrackItem.displayName = 'TrackItem';
