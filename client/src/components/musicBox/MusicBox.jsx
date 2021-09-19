import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import styles from './MusicBox.module.css'

const MusicBox = () => {
  return (
    <div>
      <div className={styles.musicBox}>
        <FontAwesomeIcon style={{ fontSize: '2rem' }} icon={faMusic} color="black" />
      </div>
    </div>
  )
}

export default MusicBox
