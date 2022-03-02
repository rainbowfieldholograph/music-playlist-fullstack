import styles from './PlayerVolume.module.css'
import { PlayerVolumeProps } from './PlayerVolume.props'

const PlayerVolume = ({ volumeState, handleVolume }: PlayerVolumeProps) => {
  return (
    <div className={styles.box}>
      <p className={styles.title}>Volume: {Math.round(volumeState * 100)}%</p>
      <input
        className="clickable"
        type="range"
        value={Math.round(volumeState * 100)}
        onChange={(e) => handleVolume(e)}
      />
    </div>
  )
}

export default PlayerVolume
