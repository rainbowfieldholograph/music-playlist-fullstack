import React from 'react'
import styles from './PlayerInfo.module.css'

const calcTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  const m = minutes < 10 ? `0${minutes}` : `${minutes}`
  const s = secs < 10 ? `0${secs}` : `${secs}`
  return `${m}:${s}`
}

const PlayerInfo = ({ track, duration, currentTime, handleProgress }) => {
  return (
    <div className={styles.info}>
      <div className={styles.infoInnerBox}>
        <h2 className={styles.title}>{track.title}</h2>
        <p>{calcTime(duration)}</p>
      </div>

      <div className={styles.infoInnerBox}>
        <h3>{track.author}</h3>
        <p>{calcTime(currentTime)}</p>
      </div>
      <input
        className={styles.progressBar}
        type="range"
        onChange={handleProgress}
        value={duration ? Math.round((currentTime * 100) / duration) : 0}
      />
    </div>
  )
}

export default PlayerInfo
