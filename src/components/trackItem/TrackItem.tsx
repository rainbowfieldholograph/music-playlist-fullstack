import clsx from 'clsx';
import styles from './TrackItem.module.css';
import { TrackItemProps } from './TrackItem.props';

export const TrackItem = ({
  title,
  active,
  subtitle,
  onClick,
}: TrackItemProps): JSX.Element => {
  return (
    <button
      onClick={() => onClick()}
      className={clsx(styles.track, { [styles.active]: active })}
    >
      <div className={styles.trackBox} />
      <div className={styles.info}>
        <p className={styles.text}>{title}</p>
        <p className={styles.text}>{subtitle}</p>
      </div>
    </button>
  );
};
