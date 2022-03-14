import { useState } from 'react';
import styles from './Playlist.module.css';
import { ErorrBlock } from '../errorBlock/ErorrBlock';
import { FullHeightBlock } from '../fullHeightBlock/FullHeightBlock';
import { Spinner } from '../spinner/Spinner';
import { useQuery } from '@apollo/client';
import { TracksList } from '../tracksList/TracksList';
import { Button } from '../button/Button';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { PlaylistProps } from './Playlist.props';
import { UploadModal } from '../uploadModal/UploadModal';

const Playlist = ({}: PlaylistProps): JSX.Element => {
  const { data, loading, error } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);
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

  return (
    <section className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <Button onClick={openModal}>Add new track</Button>
      </div>
      <TracksList data={tracks} />
      <UploadModal isOpen={modal} onClose={closeModal} />
    </section>
  );
};

export default Playlist;
