import { calculateTime } from '../../helpers/calculateTime'
import styles from './PlayerInfo.module.css'
import { PlayerInfoProps } from './PlayerInfo.props'

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
        <p>{calculateTime(duration)}</p>
      </div>
      <div className={styles.infoInnerBox}>
        <h3 className={styles.title}>{track?.author}</h3>
        <p>{calculateTime(currentTime)}</p>
      </div>
      <input
        className={styles.progressBar}
        type="range"
        disabled={canChangeTime ? false : true}
        onChange={() => handleProgress}
        value={duration ? Math.round((currentTime * 100) / duration) : 0}
      />
    </div>
  )
}
