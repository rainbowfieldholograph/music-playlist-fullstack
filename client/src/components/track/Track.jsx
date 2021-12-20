import { observer } from 'mobx-react-lite'
import React from 'react'
import PlayerStore from '../../mobx/PlayerStore'
import styles from './Track.module.css'

const Track = observer(({ track, index }) => {
  const { tracks, setCurrentTrack, currentTrack } = PlayerStore
  const findedTrack = tracks[index]
  console.log('curtrack: ', currentTrack)
  let isCurrentTrack
  console.log(findedTrack)
  if (currentTrack) {
    isCurrentTrack = findedTrack.id === currentTrack.id
  } else {
    isCurrentTrack = false
  }
  console.log()

  return (
    <li
      className={isCurrentTrack ? `${styles.track} ${styles.active}` : styles.track}
      onClick={() => {
        !isCurrentTrack && setCurrentTrack(track)
        console.log('start')
      }}
    >
      <div className={styles.trackBox}></div>
      <div className={styles.infoBox}>
        <div className={styles.innerBox}>
          <h3>{track.title}</h3>
        </div>
        <div className={styles.innerBox}>
          <h3>{track.author}</h3>
        </div>
      </div>
    </li>
  )
})

export default Track
