import { useState } from 'react'
import Loading from '../loading/Loading'
import TrackItem from '../trackItem/TrackItem'
import styles from './Playlist.module.css'
import { observer } from 'mobx-react-lite'
import UploadModal from '../uploadModal/UploadModal'
import ErorrBlock from '../errorBlock/ErorrBlock'
import { useTracksFetching } from '../../hooks/useTracksFetching'

const Playlist = observer(() => {
  const { tracks, loading, error } = useTracksFetching()
  const [modal, setModal] = useState(false)

  if (error)
    return (
      <div className={styles.notLoadedWrapper}>
        <ErorrBlock />
      </div>
    )

  if (loading)
    return (
      <div className={styles.notLoadedWrapper}>
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
