import { useState } from 'react'
import styles from './Playlist.module.css'
import UploadModal from '../uploadModal/UploadModal'
import { ErorrBlock } from '../errorBlock/ErorrBlock'
import { FullHeightBlock } from '../fullHeightBlock/FullHeightBlock'
import { Loading } from '../loading/Loading'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRACKS } from '../../graphql/queries/getAllTracks.query'
import { IGetAllTracks } from '../../graphql/queries/getAllTracks.interface'
import { TracksList } from '../tracksList/TracksList'
import { Button } from '../button/Button'

const Playlist = (): JSX.Element => {
  const { data, loading, error } = useQuery<IGetAllTracks>(GET_ALL_TRACKS)
  const [modal, setModal] = useState(false)
  const tracks = data?.getAllTracks

  if (error)
    return (
      <FullHeightBlock>
        <ErorrBlock />
      </FullHeightBlock>
    )

  if (loading || !tracks)
    return (
      <FullHeightBlock>
        <Loading />
      </FullHeightBlock>
    )

  const openModal = () => () => setModal(!modal)

  return (
    <section className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <Button onClick={openModal()}>Add new track</Button>
      </div>
      <TracksList data={tracks} />
      <UploadModal modal={modal} setModal={setModal} />
    </section>
  )
}

export default Playlist
