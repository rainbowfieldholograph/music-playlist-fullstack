import { useQuery } from '@apollo/client'
import React, { useEffect, useReducer } from 'react'
import { GET_ALL_TRACKS } from '../graphql/tracks/query'
import playerContext from './playerContext'
import playerReducer from './playerReducer'

import {
  SET_CURRENT_TRACK,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_TRACKS,
  TOGGLE_MODAL,
} from './types'

const PlayerState = (props) => {
  const { data = {}, loading } = useQuery(GET_ALL_TRACKS)
  const { getAllTracks: allTracksData = [] } = data

  const tracksData = allTracksData.map((cur, index) => {
    let newObj = Object.assign({}, cur)
    newObj.index = index
    return newObj
  })

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
    if (!loading) {
      dispatch({ type: SET_TRACKS, data: tracksData })
      dispatch({ type: SET_CURRENT_TRACK, data: tracksData[0]?.index, play: false })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const isLoading = () => {
    return loading
  }

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
        data: ~~(Math.random() * state.tracksData.length),
        play: true,
      })
    } else {
      if (state.repeat) {
        nextTrack()
      } else if (state.currentTrack === state.tracks.length - 1) {
        setCurrentTrack(0)
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
        isLoading,
      }}
    >
      {props.children}
    </playerContext.Provider>
  )
}

export default PlayerState
