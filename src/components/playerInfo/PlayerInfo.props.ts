import { ITrack } from '../../interfaces/track.interface'

export interface PlayerInfoProps {
  track: ITrack
  duration: number
  currentTime: number
  handleProgress: Function
  canChangeTime: boolean
}
