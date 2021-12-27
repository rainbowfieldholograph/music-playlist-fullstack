import { useState } from 'react'
import Loading from '../loading/Loading'
import TrackItem from '../trackItem/TrackItem'
import styles from './Playlist.module.css'
import PlayerStore from '../../mobx/PlayerStore'
import { observer } from 'mobx-react-lite'
import UploadModal from '../uploadModal/UploadModal'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRACKS } from '../../graphql/tracks/query'
import ErorrBlock from '../errorBlock/ErorrBlock'

const Playlist = observer(() => {
  const { setTracks, tracks } = PlayerStore
  const { loading, error } = useQuery(GET_ALL_TRACKS, {
    onCompleted: ({ getAllTracks }) => {
      setTracks(getAllTracks)
    },
  })

  const [modal, setModal] = useState(false)

  if (error) return <ErorrBlock />

  if (loading)
    return (
      <div className={styles.loaderWrapper}>
        <Loading />
      </div>
    )

  return (
    <section className={styles.playlist}>
      <div className={styles.buttonFlex}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <button onClick={() => setModal(!modal)} className={styles.btn}>
          Add new track
        </button>
      </div>
      <ul className={styles.tracksBlock}>
        {tracks.map((track, index) => {
          return (
            <li key={track.id}>
              <TrackItem track={track} index={index} />
            </li>
          )
        })}
      </ul>
      <UploadModal modal={modal} setModal={setModal} />
    </section>
  )
})

export default Playlist
