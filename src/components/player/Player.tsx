import { useEffect } from 'react'
import styles from './Player.module.css'
import PlayerControls from '../playerControls/PlayerControls'
import PlayerVolume from '../playerVolume/PlayerVolume'
import { useQuery, useReactiveVar } from '@apollo/client'
import { GET_ALL_TRACKS } from '../../graphql/queries/getAllTracks.query'
import { PlayerMusicImage } from '../playerMusicImage/PlayerMusicImage'
import { PlayerInfo } from '../playerInfo/PlayerInfo'
import {
  CurrentTrack,
  currentTrackVar,
  Duration,
  durationVar,
} from '../../graphql/apollo/apollo'

let audio = new Audio()
let canChangeTime = true

export const Player = (): JSX.Element | null => {
  const duration = useReactiveVar(durationVar)
  console.log(duration)

  const prevTrack = () => {
    console.log('prev')
    // const currentIndex = this.tracks.indexOf(this.currentTrack)
    // currentIndex === 0
    //   ? this.setCurrentTrack(this.tracks[this.tracks.length - 1])
    //   : this.setCurrentTrack(this.tracks[currentIndex - 1])
  }

  const nextTrack = () => {
    console.log('next')
    // const currentIndex = this.tracks.indexOf(this.currentTrack)
    // currentIndex === this.tracks.length - 1
    //   ? this.setCurrentTrack(this.tracks[0])
    //   : this.setCurrentTrack(this.tracks[currentIndex + 1])
  }

  const handleEnd = () => {
    nextTrack()
  }

  // return <div onClick={() => durationVar(duration + 1)}>{duration}</div>

  return null

  // const {
  //   data: { currentTrackId },
  // } = useQuery(GET_CURRENT_TRACK_ID)
  // const { data, loading } = useQuery(GET_ALL_TRACKS)
  // const {
  //   data: { duration },
  // } = useQuery(GET_DURATION)
  // const {
  //   data: { isPlaying },
  // } = useQuery(IS_PLAYING)
  // const {
  //   data: { volume },
  // } = useQuery(GET_VOLUME)
  // const {
  //   data: { currentTime },
  // } = useQuery(GET_CURRENT_TIME)

  // const allTrack = data?.getAllTracks

  // const currentTrack = allTrack?.filter((track: any) => track.id === currentTrackId)

  // useEffect(() => {
  //   if (currentTrack) {
  //     audio.src = currentTrack.src
  //     audio.ontimeupdate = () => currentTimeVar(audio.currentTime)
  //     audio.onloadeddata = () => {
  //       setTimeout(() => {
  //         canChangeTime = true
  //       }, 200)
  //       durationVar(audio.duration)
  //     }
  //     audio.onended = () => {
  //       canChangeTime = false
  //       handleEnd()
  //     }
  //     toggleAudio()
  //   }
  // }, [currentTrack])

  // const toggleAudio = async () => {
  //   if (audio.paused) {
  //     isPlayingVar(true)
  //     try {
  //       await audio.play()
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   } else {
  //     isPlayingVar(false)
  //     audio.pause()
  //   }
  // }

  // const handleProgress = (event: any) => {
  //   if (canChangeTime) {
  //     const timeCompute = (event.target.value * duration) / 100
  //     audio.currentTime = timeCompute
  //     currentTimeVar(timeCompute)
  //   }
  // }

  // const handleVolume = (event: any) => {
  //   const volumeCompute = event.target.value / 100
  //   volumeVar(volumeCompute)
  //   audio.volume = volumeCompute
  // }

  // if (!currentTrack) return null

  // return (
  //   <div className={styles.player}>
  //     <PlayerControls
  //       toggleAudio={toggleAudio}
  //       nextTrack={nextTrack}
  //       prevTrack={prevTrack}
  //       playing={isPlaying}
  //     />
  //     <div className={styles.musicImage}>
  //       <PlayerMusicImage />
  //     </div>
  //     <PlayerInfo
  //       track={currentTrack}
  //       duration={duration}
  //       currentTime={currentTime}
  //       handleProgress={handleProgress}
  //       canChangeTime={canChangeTime}
  //     />
  //     <PlayerVolume volumeState={volume} handleVolume={handleVolume} />
  //   </div>
  // )
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
