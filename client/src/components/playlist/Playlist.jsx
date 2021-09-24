import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Track from '../track/Track'
import styles from './Playlist.module.css'

const Playlist = () => {
  const { tracks, toggleModal } = useContext(playerContext)
  return (
    <section className={styles.playlist}>
      <div className={styles.buttonFlex}>
        <h1>Tracks:</h1>
        <button
          onClick={() => {
            toggleModal()
          }}
          className={styles.btn}
        >
          Add new track
        </button>
      </div>

      {tracks?.map((item) => {
        return <Track index={item.index} key={item.id} title={item.title} author={item.author} />
      })}
    </section>
  )
}

export default Playlist
