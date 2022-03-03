import { TracksListProps } from './TracksList.props'
import styles from './TracksList.module.css'
import { TrackItem } from '../trackItem/TrackItem'
import { currentTrackVar } from '../../graphql/apollo/apollo'
import { useReactiveVar } from '@apollo/client'
import { ITrack } from '../../interfaces/track.interface'

export const TracksList = ({ data }: TracksListProps): JSX.Element => {
  const currentTrack = useReactiveVar(currentTrackVar)

  const onClickTrack = (track: ITrack) => () => currentTrackVar(track)

  return (
    <ul className={styles.tracksBlock}>
      {data.map((track) => (
        <li key={track.id}>
          <TrackItem
            active={track.id === currentTrack?.id}
            onClick={onClickTrack(track)}
            title={track.title}
            subtitle={track.author}
          />
        </li>
      ))}
    </ul>
  )
}
