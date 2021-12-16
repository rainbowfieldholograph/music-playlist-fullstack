import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom, faRedo, faMusic } from '@fortawesome/free-solid-svg-icons'
import styles from './Player.module.css'
import { observer } from 'mobx-react-lite'
import PlayerStore from '../../mobx/PlayerStore'
import PlayerControls from '../playerControls/PlayerControls'

const calcTime = (seconds) => {
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  const m = minutes < 10 ? `0${minutes}` : `${minutes}`
  const s = secs < 10 ? `0${secs}` : `${secs}`
  return `${m}:${s}`
}

PlayerStore.fetchTracks()
console.log('start)')

const Player = observer(() => {
  const [volumeState, setVolumeState] = useState(1)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [canChangeProgress, setCanChangeProgress] = useState()

  const audio = useRef()

  const toggleAudio = () => {
    audio?.current.paused ? audio.current.play() : audio.current.pause()
  }

  const handleProgress = (event) => {
    if (!canChangeProgress) {
      audio.current.currentTime = 0
      setCurrentTime(0)
      return
    }
    const compute = (event.target.value * duration) / 100
    audio.current.currentTime = compute
    setCurrentTime(compute)
  }

  const handleVolume = (event) => {
    const compute = event.target.value / 100
    setVolumeState(compute)
    audio.current.volume = compute
  }

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volumeState
      audio.current.currentTime = 0
      PlayerStore.playing && toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [PlayerStore.currentTrackIndex])

  useEffect(() => {
    if (audio.current) {
      audio.current.onended = () => {
        setCanChangeProgress(false)
      }
    }
  })

  return (
    <div className={styles.player}>
      {PlayerStore.isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {console.log('loading: ', PlayerStore.isLoading)}
          {console.log('hahahahha, wtf???/', PlayerStore.tracks[PlayerStore.currentTrackIndex])}
          <audio
            ref={audio}
            src={PlayerStore.tracks[PlayerStore.currentTrackIndex].src}
            onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
            onLoadedData={(event) => {
              setDuration(event.target.duration)
              setTimeout(() => {
                setCanChangeProgress(true)
              }, 100)
            }}
            onEnded={() => {
              PlayerStore.handleEnd()
            }}
            preload="auto"
          />
          <PlayerControls toggleAudio={toggleAudio} />
          <div className={styles.musicBox}>
            <FontAwesomeIcon style={{ fontSize: '1.7rem' }} icon={faMusic} color="black" />
          </div>
          <div className={styles.info}>
            <div className={styles.infoInnerBox}>
              <h2 className={styles.title}>
                {PlayerStore.tracks[PlayerStore.currentTrackIndex].title}
              </h2>
              <p>{calcTime(duration)}</p>
            </div>

            <div className={styles.infoInnerBox}>
              <h3>{PlayerStore.tracks[PlayerStore.currentTrackIndex].author}</h3>
              <p>{calcTime(currentTime)}</p>
            </div>
            <input
              className={styles.progressBar}
              type="range"
              onChange={handleProgress}
              value={duration ? Math.round((currentTime * 100) / duration) : 0}
            />
          </div>
          <div className={styles.box}>
            <h3>Volume: {Math.round(volumeState * 100)}%</h3>
            <input
              className="clickable"
              type="range"
              value={Math.round(volumeState * 100)}
              onChange={(e) => handleVolume(e)}
            />
          </div>
        </>
      )}
    </div>
  )
})

/* <FontAwesomeIcon
        className='clickable'
        style={random ? { fontSize: '2.5rem' } : { fontSize: '2rem' }}
        color={random ? 'purple' : 'black'}
        icon={faRandom}
        onClick={toggleRandom}
      />
      <FontAwesomeIcon
        className='clickable'
        style={repeat ? { fontSize: '2.2rem' } : { fontSize: '1.7rem' }}
        color={repeat ? 'purple' : 'black'}
        icon={faRedo}
        onClick={toggleRepeat}
      /> */

export default Player
