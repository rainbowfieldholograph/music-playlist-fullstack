import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PlayerControls.module.css'
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons'
import { PlayerControlsProps } from './PlayerControls.props'
import { PlayerMusicImage } from '../playerMusicImage/PlayerMusicImage'

const PlayerControls = ({
  toggleAudio,
  nextTrack,
  prevTrack,
  playing,
}: PlayerControlsProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.musicImage}>
        <PlayerMusicImage />
      </div>
      <button className={styles.button} onClick={() => toggleAudio()}>
        <FontAwesomeIcon
          size="3x"
          icon={playing ? faPauseCircle : faPlayCircle}
          color="black"
        />
      </button>
      <div className={styles.rewindControls}>
        <button className={styles.button} onClick={() => prevTrack()}>
          <FontAwesomeIcon size="2x" icon={faStepBackward} color="black" />
        </button>
        <button className={styles.button} onClick={() => nextTrack()}>
          <FontAwesomeIcon size="2x" icon={faStepForward} color="black" />
        </button>
      </div>
    </div>
  )
}

export default PlayerControls
