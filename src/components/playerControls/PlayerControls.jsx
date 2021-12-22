import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './PlayerControls.module.css'
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons'
import PlayerMusicImage from '../playerMusicImage/PlayerMusicImage'

const PlayerControls = ({ toggleAudio, nextTrack, prevTrack, playing }) => {
  return (
    <div className={styles.controlsBox}>
      <div className={styles.musicImage}>
        <PlayerMusicImage />
      </div>
      <FontAwesomeIcon
        className="clickable"
        onClick={toggleAudio}
        style={{ fontSize: '2.5rem' }}
        icon={playing ? faPauseCircle : faPlayCircle}
        color="black"
      />
      <div className={styles.controls}>
        <FontAwesomeIcon
          className="clickable"
          style={{ fontSize: '1.5rem' }}
          icon={faStepBackward}
          color="black"
          onClick={prevTrack}
        />
        <FontAwesomeIcon
          className="clickable"
          style={{ fontSize: '1.5rem' }}
          icon={faStepForward}
          color="black"
          onClick={nextTrack}
        />
      </div>
    </div>
  )
}

export default PlayerControls
