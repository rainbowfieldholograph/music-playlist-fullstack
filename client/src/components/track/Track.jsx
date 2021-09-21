import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import styles from './Track.module.css'

const Track = ({ id, index, title, author }) => {
  const { setCurrentTrack, currentTrack } = useContext(playerContext)
  return (
    <div
      className={currentTrack === index ? [styles.track, styles.active].join(' ') : styles.track}
      onClick={() => {
        return currentTrack !== id && setCurrentTrack(index)
      }}
    >
      <div className={styles.trackBox}></div>
      <div className={styles.infoBox}>
        <div className={styles.innerBox}>
          <h3>{title}</h3>
        </div>
        <div className={styles.innerBox}>
          <h3>{author}</h3>
        </div>
      </div>
    </div>
  )
}

export default Track
