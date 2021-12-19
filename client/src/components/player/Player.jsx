import React, { useEffect, useRef, useState } from 'react'
import styles from './Player.module.css'
import { observer } from 'mobx-react-lite'
import PlayerStore from '../../mobx/PlayerStore'
import PlayerControls from '../playerControls/PlayerControls'
import PlayerInfo from '../playerInfo/PlayerInfo'
import PlayerVolume from '../playerVolume/PlayerVolume'
import PlayerMusicImage from '../playerMusicImage/PlayerMusicImage'

PlayerStore.fetchTracks()
let currentAudio

const Player = observer(() => {
  const {
    currentTime,
    duration,
    volume,
    playing,
    currentTrackIndex,
    isLoading,
    tracks,
    setCurrentTime,
    setDuration,
    setVolume,
    setCurrentTrackIndex,
    setPlaying,
    handleEnd,
  } = PlayerStore

  const [canChangeProgress, setCanChangeProgress] = useState()

  const audio = useRef()

  useEffect(() => {
    if (!currentAudio) currentAudio = new Audio()
  })

  const toggleAudio = async () => {
    try {
      if (audio.current.paused) {
        setPlaying(true)
        await audio.current.play()
      } else {
        setPlaying(false)
        await audio.current.pause()
      }
    } catch (error) {
      console.log(error)
    }
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
    const volumeCompute = event.target.value / 100
    setVolume(volumeCompute)
    audio.current.volume = volumeCompute
  }

  useEffect(() => {
    if (audio.current) {
      audio.current.volume = volume
      audio.current.currentTime = 0
      playing && toggleAudio()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex])

  useEffect(() => {
    if (audio.current) {
      audio.current.onended = () => {
        setCanChangeProgress(false)
      }
    }
  })

  return (
    <div className={styles.player}>
      {isLoading ? (
        <div>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <audio
            ref={audio}
            src={tracks[currentTrackIndex].src}
            onTimeUpdate={(event) => setCurrentTime(event.target.currentTime)}
            onLoadedData={(event) => {
              setDuration(event.target.duration)
              setTimeout(() => {
                setCanChangeProgress(true)
              }, 100)
            }}
            onEnded={() => {
              handleEnd()
            }}
            preload="auto"
          />
          <PlayerControls toggleAudio={toggleAudio} />
          <div className={styles.musicImage}>
            <PlayerMusicImage />
          </div>
          <PlayerInfo
            duration={duration}
            currentTime={currentTime}
            handleProgress={handleProgress}
          />
          <PlayerVolume volumeState={volume} handleVolume={handleVolume} />
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
