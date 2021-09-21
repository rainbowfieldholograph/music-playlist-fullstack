import {
  SET_CURRENT_TRACK,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_TRACKS,
  TOGGLE_MODAL,
} from './types'

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_TRACK:
      return {
        ...state,
        currentTrack: action.data,
        playing: action.play,
      }
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.data,
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.data,
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.data,
      }
    case SET_TRACKS:
      return {
        ...state,
        tracks: action.data,
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: action.data,
      }
    default:
      return state
  }
}
