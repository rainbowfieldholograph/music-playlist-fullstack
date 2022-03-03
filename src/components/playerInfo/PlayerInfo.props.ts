import { ChangeEventHandler } from 'react'
import { ITrack } from '../../interfaces/track.interface'

export interface PlayerInfoProps {
  track: ITrack
  duration: number
  currentTime: number
  handleProgress: ChangeEventHandler<HTMLInputElement>
  canChangeTime: boolean
}
