import React, { useEffect, useRef, useState } from 'react'
import styles from './Player.module.css'
import { observer } from 'mobx-react-lite'
import PlayerStore from '../../mobx/PlayerStore'
import PlayerControls from '../playerControls/PlayerControls'
import PlayerInfo from '../playerInfo/PlayerInfo'
import PlayerVolume from '../playerVolume/PlayerVolume'
import PlayerMusicImage from '../playerMusicImage/PlayerMusicImage'

PlayerStore.fetchTracks()

const Player = observer(() => {
  const [volumeState, setVolumeState] = useState(1)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [canChangeProgress, setCanChangeProgress] = useState()

  const audio = useRef()

  const toggleAudio = async () => {
    if (audio.current.paused) {
      try {
        await audio.current.play()
      } catch (error) {
        console.log(error)
      }
    } else {
      try {
        await audio.current.pause()
      } catch (error) {
        console.log(error)
      }
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
    const compute = event.target.value / 100
    setVolumeState(compute)
    audio.current.volume = compute
  }

  console.log(PlayerStore.currentTrackIndex)
  useEffect(() => {
    console.log('sssq')
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
          <div className={styles.musicImage}>
            <PlayerMusicImage />
          </div>
          <PlayerInfo
            duration={duration}
            currentTime={currentTime}
            handleProgress={handleProgress}
          />
          <PlayerVolume volumeState={volumeState} handleVolume={handleVolume} />
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
