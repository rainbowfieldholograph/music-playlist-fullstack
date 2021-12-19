import React, { useState } from 'react'
import Loading from '../loading/Loading'
import Track from '../track/Track'
import styles from './Playlist.module.css'
import UploadForm from '../uploadForm/UploadForm'
import PlayerStore from '../../mobx/PlayerStore'
import { observer } from 'mobx-react-lite'

const Playlist = observer(() => {
  const [modal, setModal] = useState(false)
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
              <Track
                key={track.id}
                index={index}
                title={track.title}
                author={track.author}
                isCurrentTrack={PlayerStore.currentTrackIndex === index}
              />
            )
          })}
        </ul>
      )}

      <UploadForm modal={modal} setModal={setModal} />
    </section>
  )
})

export default Playlist
