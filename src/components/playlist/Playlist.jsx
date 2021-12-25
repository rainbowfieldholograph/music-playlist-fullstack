import { useEffect, useState } from 'react'
import Loading from '../loading/Loading'
import TrackItem from '../trackItem/TrackItem'
import styles from './Playlist.module.css'
import PlayerStore from '../../mobx/PlayerStore'
import { observer } from 'mobx-react-lite'
import UploadModal from '../uploadModal/UploadModal'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRACKS } from '../../graphql/tracks/query'

const Playlist = observer(() => {
  const { data, loading, error } = useQuery(GET_ALL_TRACKS)
  const { setTracks, tracks } = PlayerStore
  const [modal, setModal] = useState(false)

  useEffect(() => {
    if (!loading) {
      setTracks(data?.getAllTracks)
    }
  }, [loading])

  if (error)
    return (
      <div>
        <p style={{ textAlign: 'center' }} className={styles.title}>
          Connection Error
        </p>
      </div>
    )

  return (
    <section className={styles.playlist}>
      {loading ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </section>
  )
})

export default Playlist
