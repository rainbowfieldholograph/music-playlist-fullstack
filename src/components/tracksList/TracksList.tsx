import { TracksListProps } from './TracksList.props'
import styles from './TracksList.module.css'
import { TrackItem } from '../trackItem/TrackItem'

export const TracksList = ({ data }: TracksListProps): JSX.Element => {
  return (
    <>
      <ul className={styles.tracksBlock}>
        {data.map((track) => (
          <li key={track.id}>
            <TrackItem
              active={false}
              onClick={() => alert('click')}
              title={track.title}
              subtitle={track.author}
            />
          </li>
        ))}
      </ul>
    </>
  )
}
