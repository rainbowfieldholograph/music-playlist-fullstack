import React, { useContext } from 'react'
import playerContext from '../../context/playerContext'
import Track from '../track/Track'
import styles from './Playlist.module.css'

const Playlist = () => {
  const { tracks } = useContext(playerContext)
  return (
    <section className={styles.playlist}>
      <h1>Tracks:</h1>
      {tracks?.map((item, index) => {
        return <Track key={item.id} id={item.id} title={item.title} author={item.author} />
      })}
    </section>
  )
}

export default Playlist
