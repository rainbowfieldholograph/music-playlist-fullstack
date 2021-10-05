import React, { useContext, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faRandom,
  faRedo,
  faPauseCircle,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'
import styles from './Player.module.css'
import playerContext from '../../context/playerContext'

const Player = () => {
  const {
    currentTrack,
    tracks,
    nextTrack,
    prevTrack,
    repeat,
    random,
    playing,
    toggleRandom,
    toggleRepeat,
    togglePlaying,
    handleEnd,
  } = useContext(playerContext)

  let playingTrack = tracks.filter((item) => item.index === currentTrack)
  playingTrack = playingTrack[0]

  const [volumeState, setVolumeState] = useState(1)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audio = useRef()

  const toggleAudio = () => {
    audio.current.paused ? audio.current.play() : audio.current.pause()
  }

  const handleProgress = (e) => {
    const compute = (e.target.value * duration) / 100
    setCurrentTime(compute)
    audio.current.currentTime = compute
  }

  const handleVolume = (e) => {
    const compute = e.target.value / 100
    setVolumeState(compute)
    audio.current.volume = compute
  }

  const calcTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    const m = minutes < 10 ? `0${minutes}` : `${minutes}`
    const s = secs < 10 ? `0${secs}` : `${secs}`
    return `${m}:${s}`
  }

  useEffect(() => {
    audio.current.volume = volumeState
    setCurrentTime(0)
    playing && toggleAudio()
  }, [currentTrack])

  return (
    <section className={styles.player}>
      <audio
        ref={audio}
        src={playingTrack?.src}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onEnded={handleEnd}
        preload="auto"
      />
      {console.log(duration)}
      <FontAwesomeIcon
        className={styles.clickable}
        onClick={() => {
          togglePlaying()
          toggleAudio()
        }}
        style={{ fontSize: '2.5rem' }}
        icon={playing ? faPauseCircle : faPlayCircle}
        color="black"
      />
      <div>
        <FontAwesomeIcon
          className={styles.clickable}
          style={{ fontSize: '1.5rem', marginRight: 20 }}
          icon={faStepBackward}
          color="black"
          onClick={prevTrack}
        />
        <FontAwesomeIcon
          className={styles.clickable}
          style={{ fontSize: '1.5rem' }}
          icon={faStepForward}
          color="black"
          onClick={nextTrack}
        />
      </div>
      <div className={styles.musicBox}>
        <FontAwesomeIcon style={{ fontSize: '1.7rem' }} icon={faMusic} color="black" />
      </div>
      <div className={styles.info}>
        <div className={styles.infoInnerBox}>
          <h2 className={styles.title}>{playingTrack?.title}</h2>
          {console.log(duration)}
          <p>{calcTime(duration)}</p>
        </div>

        <div className={styles.infoInnerBox}>
          <h3>{playingTrack?.author}</h3>
          <p>{calcTime(currentTime)}</p>
        </div>
        <input
          className={styles.clickable}
          type="range"
          onChange={handleProgress}
          value={duration ? Math.round((currentTime * 100) / duration) : 0}
        />
      </div>
      <div>
        <h3>Volume: {Math.round(volumeState * 100)}%</h3>
        <input
          className={styles.clickable}
          type="range"
          value={Math.round(volumeState * 100)}
          onChange={(e) => handleVolume(e)}
        />
      </div>
      {console.log('curTime', currentTime)}
      {console.log('dur', duration)}
      {/* <FontAwesomeIcon
        className={styles.clickable}
        style={random ? { fontSize: '2.5rem' } : { fontSize: '2rem' }}
        color={random ? 'purple' : 'black'}
        icon={faRandom}
        onClick={toggleRandom}
      />
      <FontAwesomeIcon
        className={styles.clickable}
        style={repeat ? { fontSize: '2.2rem' } : { fontSize: '1.7rem' }}
        color={repeat ? 'purple' : 'black'}
        icon={faRedo}
        onClick={toggleRepeat}
      /> */}
    </section>
  )
}

export default Player
