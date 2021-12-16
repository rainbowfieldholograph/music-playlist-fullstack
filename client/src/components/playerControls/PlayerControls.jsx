import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PlayerStore from '../../mobx/PlayerStore'
import styles from './PlayerControls.module.css'
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons'
import PlayerMusicImage from '../playerMusicImage/PlayerMusicImage'

const PlayerControls = ({ toggleAudio }) => {
  const onClickTogglePlay = async () => {
    PlayerStore.togglePlaying()
    toggleAudio()
  }

  return (
    <div className={styles.controlsBox}>
      <div className={styles.musicImage}>
        <PlayerMusicImage />
      </div>
      <FontAwesomeIcon
        className="clickable"
        onClick={onClickTogglePlay}
        style={{ fontSize: '2.5rem' }}
        icon={PlayerStore.playing ? faPauseCircle : faPlayCircle}
        color="black"
      />
      <div className={styles.controls}>
        <FontAwesomeIcon
          className="clickable"
          style={{ fontSize: '1.5rem' }}
          icon={faStepBackward}
          color="black"
          onClick={PlayerStore.prevTrack}
        />
        <FontAwesomeIcon
          className="clickable"
          style={{ fontSize: '1.5rem' }}
          icon={faStepForward}
          color="black"
          onClick={PlayerStore.nextTrack}
        />
      </div>
    </div>
  )
}

export default PlayerControls
