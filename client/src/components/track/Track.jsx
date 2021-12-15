import { observer } from 'mobx-react-lite'
import React from 'react'
import PlayerStore from '../../mobx/PlayerStore'
import styles from './Track.module.css'

const Track = observer(({ index, title, author }) => {
  return (
    <li
      className={
        PlayerStore.currentTrack === index ? [styles.track, styles.active].join(' ') : styles.track
      }
      onClick={() => {
        return PlayerStore.currentTrack !== index && PlayerStore.setCurrentTrack(index)
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
    </li>
  )
})

export default Track
