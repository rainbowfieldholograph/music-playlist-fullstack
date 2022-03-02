import clsx from 'clsx'
import styles from './TrackItem.module.css'
import { TrackItemProps } from './TrackItem.props'

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
        <div className={styles.innerBox}>
          <h2 className={styles.text}>{title}</h2>
        </div>
        <div className={styles.innerBox}>
          <h3 className={styles.text}>{subtitle}</h3>
        </div>
      </div>
    </button>
  )
}
