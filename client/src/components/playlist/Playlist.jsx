import React, { useState } from 'react'
import Loading from '../loading/Loading'
import Track from '../track/Track'
import styles from './Playlist.module.css'
import UploadForm from '../uploadForm/UploadForm'
import PlayerStore from '../../mobx/PlayerStore'
import { observer } from 'mobx-react-lite'

const Playlist = observer(() => {
  const [modal, setModal] = useState(false)
  return (
    <section className={styles.playlist}>
      <>
        <div className={styles.buttonFlex}>
          <h1 className={styles.title}>Playlist:</h1>
          <button
            onClick={() => {
              setModal(!modal)
            }}
            className={styles.btn}
          >
            Add new track
          </button>
        </div>
        {PlayerStore.isLoading ? (
          <Loading />
        ) : (
          <ul className={styles.tracksBlock}>
            {PlayerStore.tracks.map((item, index) => {
              return <Track index={index} key={item.id} title={item.title} author={item.author} />
            })}
          </ul>
        )}

        <UploadForm modal={modal} setModal={setModal} />
      </>
    </section>
  )
})

export default Playlist
