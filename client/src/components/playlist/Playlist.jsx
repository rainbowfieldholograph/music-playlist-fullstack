import { useState } from 'react'
import Loading from '../loading/Loading'
import TrackItem from '../track/TrackItem'
import styles from './Playlist.module.css'
import PlayerStore from '../../mobx/PlayerStore'
import { observer } from 'mobx-react-lite'
import UploadModal from '../uploadModal/UploadModal'

const Playlist = observer(() => {
  const [modal, setModal] = useState(false)
  console.log('playlist render')
  const { isLoading, tracks } = PlayerStore
  return (
    <section className={styles.playlist}>
      <div className={styles.buttonFlex}>
        <h1 className={styles.title}>Playlist:</h1>
        <button onClick={() => setModal(!modal)} className={styles.btn}>
          Add new track
        </button>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.tracksBlock}>
          {tracks.map((track, index) => {
            return (
              <li key={track.id}>
                <TrackItem track={track} index={index} />
              </li>
            )
          })}
        </ul>
      )}

      <UploadModal modal={modal} setModal={setModal} />
    </section>
  )
})

export default Playlist
