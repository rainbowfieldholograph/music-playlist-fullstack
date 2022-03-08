import { useState } from 'react';
import styles from './Playlist.module.css';
import { ErorrBlock } from '../errorBlock/ErorrBlock';
import { FullHeightBlock } from '../fullHeightBlock/FullHeightBlock';
import { Spinner } from '../loading/Spinner';
import { useQuery } from '@apollo/client';
import { GET_ALL_TRACKS } from '../../graphql/queries/getAllTracks.query';
import { IGetAllTracks } from '../../graphql/queries/getAllTracks.interface';
import { TracksList } from '../tracksList/TracksList';
import { Button } from '../button/Button';
import { Modal } from '../modal/Modal';
import { UploadForm } from '../uploadForm/UploadForm';

const Playlist = (): JSX.Element => {
  const { data, loading, error } = useQuery<IGetAllTracks>(GET_ALL_TRACKS);
  const [modal, setModal] = useState<boolean>(false);
  const tracks = data?.getAllTracks;

  if (error)
    return (
      <FullHeightBlock>
        <ErorrBlock />
      </FullHeightBlock>
    );

  if (loading || !tracks)
    return (
      <FullHeightBlock childsCenter>
        <Spinner />
      </FullHeightBlock>
    );

  const openModal = () => () => setModal(true);
  const closeModal = () => () => setModal(false);

  return (
    <section className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <Button onClick={openModal()}>Add new track</Button>
      </div>
      <TracksList data={tracks} />
      <Modal className={styles.uploadModal} open={modal} onClose={closeModal()}>
        <UploadForm onSubmit={closeModal()} />
      </Modal>
    </section>
  );
};

export default Playlist;
