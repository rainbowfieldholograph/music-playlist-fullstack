import { ChangeEvent, ChangeEventHandler, EventHandler, useEffect } from 'react'
import styles from './Player.module.css'
import PlayerControls from '../playerControls/PlayerControls'
import PlayerVolume from '../playerVolume/PlayerVolume'
import { useQuery, useReactiveVar } from '@apollo/client'
import { GET_ALL_TRACKS } from '../../graphql/queries/getAllTracks.query'
import { PlayerMusicImage } from '../playerMusicImage/PlayerMusicImage'
import { PlayerInfo } from '../playerInfo/PlayerInfo'
import {
  currentTimeVar,
  currentTrackVar,
  durationVar,
  isPlayingVar,
  volumeVar,
} from '../../graphql/apollo/apollo'
import { IGetAllTracks } from '../../graphql/queries/getAllTracks.interface'

let audio = new Audio()
let canChangeTime = true
const DISABLE_TIME = 200 //ms

export const Player = (): JSX.Element | null => {
  const duration = useReactiveVar(durationVar)
  const currentTrack = useReactiveVar(currentTrackVar)
  const currentTime = useReactiveVar(currentTimeVar)
  const isPlaying = useReactiveVar(isPlayingVar)
  const volume = useReactiveVar(volumeVar)
  const { data } = useQuery<IGetAllTracks>(GET_ALL_TRACKS)
  const tracks = data?.getAllTracks

  const prevTrack = () => {
    if (!tracks || !currentTrack) return
    const currentIndex = tracks.indexOf(currentTrack)
    currentIndex === 0
      ? currentTrackVar(tracks[tracks.length - 1])
      : currentTrackVar(tracks[currentIndex - 1])
  }

  const nextTrack = () => {
    if (!tracks || !currentTrack) return
    const currentIndex = tracks.indexOf(currentTrack)
    currentIndex === tracks.length - 1
      ? currentTrackVar(tracks[0])
      : currentTrackVar(tracks[currentIndex + 1])
  }

  const handleEnd = () => nextTrack()

  useEffect(() => {
    if (currentTrack) {
      audio.src = currentTrack.src
      audio.ontimeupdate = () => currentTimeVar(audio.currentTime)
      audio.onloadeddata = () => {
        setTimeout(() => {
          canChangeTime = true
        }, DISABLE_TIME)
        durationVar(audio.duration)
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
      isPlayingVar(true)
      try {
        await audio.play()
      } catch (error) {
        console.log(error)
      }
    } else {
      isPlayingVar(false)
      audio.pause()
    }
  }

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const target = +event.target.value
    if (canChangeTime) {
      const timeCompute = (target * duration) / 100
      audio.currentTime = timeCompute
      currentTimeVar(timeCompute)
    }
  }

  const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
    const target = +event.target.value
    const volumeCompute = target / 100
    volumeVar(volumeCompute)
    audio.volume = volumeCompute
  }

  if (!currentTrack) return null

  return (
    <div className={styles.player}>
      <PlayerControls
        toggleAudio={toggleAudio}
        nextTrack={nextTrack}
        prevTrack={prevTrack}
        playing={isPlaying}
      />
      <div className={styles.musicImage}>
        <PlayerMusicImage />
      </div>
      <PlayerInfo
        track={currentTrack}
        duration={duration}
        currentTime={currentTime}
        handleProgress={handleProgress}
        canChangeTime={canChangeTime}
      />
      <PlayerVolume volumeState={volume} handleVolume={handleVolume} />
    </div>
  )
}

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
