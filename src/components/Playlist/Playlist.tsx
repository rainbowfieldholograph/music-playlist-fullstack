import { useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ErorrBlock } from '../ErrorBlock';
import { FullHeightBlock } from '../FullHeightBlock';
import { Spinner } from '../Spinner';
import { TracksList } from '../TracksList';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { AddNewTrack } from '../AddNewTrack';
import { SearchInput } from '../SearchInput';
import styles from './Playlist.module.scss';

const findTextMatches = (firstText: string, secondText: string) => {
  return firstText.toLowerCase().includes(secondText.toLowerCase());
};

export const Playlist = (): JSX.Element => {
  const { data, loading, error } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const [search, setSearch] = useState<string>('');

  const filteredSongs = useMemo(
    () =>
      tracks?.filter(
        (track) =>
          findTextMatches(track.title, search) || findTextMatches(track.author, search)
      ),
    [search]
  );

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
    <div className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <AddNewTrack />
      </div>
      <SearchInput
        className={styles.search}
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <TracksList data={filteredSongs ?? tracks} />
    </div>
  );
};
