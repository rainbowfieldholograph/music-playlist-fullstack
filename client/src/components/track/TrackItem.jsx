import { observer } from 'mobx-react-lite'
import React from 'react'
import PlayerStore from '../../mobx/PlayerStore'
import styles from './TrackItem.module.css'

const TrackItem = observer(({ track, index }) => {
  const { tracks, setCurrentTrack, currentTrack } = PlayerStore
  let isCurrentTrack = false
  currentTrack && (isCurrentTrack = tracks[index].id === currentTrack.id)
  return (
    <div
      className={isCurrentTrack ? `${styles.track} ${styles.active}` : styles.track}
      onClick={() => !isCurrentTrack && setCurrentTrack(track)}
    >
      <div className={styles.trackBox} />
      <div className={styles.info}>
        <div className={styles.innerBox}>
          <h2 className={styles.text}>{track.title}</h2>
        </div>
        <div className={styles.innerBox}>
          <h3 className={styles.text}>{track.author}</h3>
        </div>
      </div>
    </div>
  )
})

export default TrackItem
