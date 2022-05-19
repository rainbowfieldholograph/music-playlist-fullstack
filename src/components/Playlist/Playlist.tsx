import { ChangeEvent, FC, useMemo, useState } from 'react';
import { useQuery } from '@apollo/client';
import { ErorrBlock } from '../ErrorBlock';
import { FullHeightBlock } from '../FullHeightBlock';
import { Spinner } from '../Spinner';
import { TracksList } from '../TracksList';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';
import { AddNewTrack } from '../AddNewTrack';
import { SearchInput } from '../SearchInput';
import styles from './Playlist.module.scss';

export const Playlist: FC = () => {
  const { data, loading, error } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSongs = useMemo(() => {
    if (!searchQuery) return tracks;
    const searchLower = searchQuery.toLowerCase();
    return tracks?.filter(({ title, author }) => {
      const titleLower = title.toLowerCase();
      const authorLower = author.toLowerCase();
      return titleLower.includes(searchQuery) || authorLower.includes(searchLower);
    });
  }, [searchQuery, tracks]);

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

  const onChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <div className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>{`Playlist: ${tracks.length}`}</h1>
        <AddNewTrack />
      </div>
      <SearchInput className={styles.search} value={searchQuery} onChange={onChangeQuery} />
      <TracksList tracks={filteredSongs ?? tracks} />
    </div>
  );
};
