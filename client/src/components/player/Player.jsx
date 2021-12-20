import { useEffect } from 'react'
import styles from './Player.module.css'
import { observer } from 'mobx-react-lite'
import PlayerStore from '../../mobx/PlayerStore'
import PlayerControls from '../playerControls/PlayerControls'
import PlayerInfo from '../playerInfo/PlayerInfo'
import PlayerVolume from '../playerVolume/PlayerVolume'
import PlayerMusicImage from '../playerMusicImage/PlayerMusicImage'

let audio = new Audio()
let canChangeTime = true

const Player = observer(() => {
  const {
    currentTime,
    duration,
    volume,
    playing,
    currentTrack,
    nextTrack,
    prevTrack,
    setCurrentTime,
    setDuration,
    setVolume,
    setPlaying,
    handleEnd,
    fetchTracks,
  } = PlayerStore

  useEffect(() => {
    fetchTracks()
  }, [])

  useEffect(() => {
    if (currentTrack) {
      audio.src = currentTrack.src
      audio.ontimeupdate = () => setCurrentTime(audio.currentTime)
      audio.onloadeddata = () => {
        canChangeTime = true
        setDuration(audio.duration)
      }
      audio.onended = () => {
        canChangeTime = false
        handleEnd()
      }
      toggleAudio()
    }
  }, [currentTrack])

  const toggleAudio = async () => {
    if (audio.paused) {
      setPlaying(true)
      try {
        await audio.play()
      } catch (error) {
        console.log(error)
      }
    } else {
      setPlaying(false)
      audio.pause()
    }
  }

  const handleProgress = (event) => {
    if (canChangeTime) {
      const timeCompute = (event.target.value * duration) / 100
      audio.currentTime = timeCompute
      setCurrentTime(timeCompute)
    }
  }

  const handleVolume = (event) => {
    const volumeCompute = event.target.value / 100
    setVolume(volumeCompute)
    audio.volume = volumeCompute
  }

  if (!currentTrack) return null

  return (
    <div className={styles.player}>
      <>
        <PlayerControls
          toggleAudio={toggleAudio}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
          playing={playing}
        />
        <div className={styles.musicImage}>
          <PlayerMusicImage />
        </div>
        <PlayerInfo
          track={currentTrack}
          duration={duration}
          currentTime={currentTime}
          handleProgress={handleProgress}
        />
        <PlayerVolume volumeState={volume} handleVolume={handleVolume} />
      </>
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
