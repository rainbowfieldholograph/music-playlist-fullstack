import { useQuery } from '@apollo/client'
import React, { useEffect, useReducer } from 'react'
import playerContext from './playerContext'
import playerReducer from './playerReducer'
import { getAllTracks } from './tracksQuery'

import {
  SET_CURRENT_TRACK,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_TRACKS,
  TOGGLE_MODAL,
} from './types'

const PlayerState = (props) => {
  const { data = {}, loading: loadingData } = useQuery(getAllTracks)
  const { getAllTracks: tracksData = [] } = data
  console.log(tracksData)

  const initialState = {
    tracks: tracksData,
    currentTrack: 0,
    repeat: false,
    random: false,
    playing: false,
    modal: false,
  }
  const [state, dispatch] = useReducer(playerReducer, initialState)

  useEffect(() => {
    if (!loadingData) {
      dispatch({ type: SET_TRACKS, data: tracksData })
      dispatch({ type: SET_CURRENT_TRACK, data: tracksData[0]?.id, play: false })
    }
  }, [data])

  const togglePlaying = () => {
    dispatch({ type: TOGGLE_PLAYING, data: state.playing ? false : true })
  }

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL, data: state.modal ? false : true })
  }

  const setCurrentTrack = (id) => dispatch({ type: SET_CURRENT_TRACK, data: id, play: true })

  const prevTrack = () => {
    if (state.currentTrack === 0) {
      setCurrentTrack(state.tracks.length - 1)
    } else {
      setCurrentTrack(state.currentTrack - 1)
    }
  }

  const nextTrack = () => {
    if (state.currentTrack === state.tracks.length - 1) {
      setCurrentTrack(0)
    } else {
      setCurrentTrack(state.currentTrack + 1)
    }
  }

  const toggleRepeat = (id) => dispatch({ type: TOGGLE_REPEAT, data: state.repeat ? false : true })
  const toggleRandom = (id) => dispatch({ type: TOGGLE_RANDOM, data: state.random ? false : true })

  const handleEnd = () => {
    if (state.random) {
      return dispatch({
        type: SET_CURRENT_TRACK,
        data: ~~(Math.random() * state.tracks.length),
        play: true,
      })
    } else {
      if (state.repeat) {
        nextTrack()
      } else if (state.currentTrack === state.tracks.length - 1) {
        return
      } else {
        nextTrack()
      }
    }
  }

  return (
    <playerContext.Provider
      value={{
        currentTrack: state.currentTrack,
        tracks: state.tracks,
        repeat: state.repeat,
        random: state.random,
        playing: state.playing,
        modal: state.modal,
        nextTrack,
        prevTrack,
        setCurrentTrack,
        toggleRandom,
        toggleRepeat,
        togglePlaying,
        handleEnd,
        toggleModal,
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}

export default PlayerState
