import { ChangeEvent, FC, useMemo, useState } from 'react';
import { ErrorBlock, FullHeightBlock, SearchInput } from 'components';
import { Spinner } from 'components';
import { AddNewTrack, useTracks } from 'features/tracks';
import { TracksList } from 'components/TracksList';
import styles from './Playlist.module.scss';

export const Playlist: FC = () => {
  const { tracks, loading, error } = useTracks();

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

  if (error) {
    return (
      <FullHeightBlock>
        <ErrorBlock />
      </FullHeightBlock>
    );
  }

  if (loading || !tracks) {
    return (
      <FullHeightBlock childsCenter>
        <Spinner />
      </FullHeightBlock>
    );
  }

  const onChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  return (
    <div className={styles.playlist}>
      <div className={styles.head}>
        <h1 className={styles.title}>Playlist: {tracks.length}</h1>
        <AddNewTrack />
      </div>
      <SearchInput
        className={styles.search}
        value={searchQuery}
        onChange={onChangeQuery}
      />
      <TracksList tracks={filteredSongs ?? tracks} />
    </div>
  );
};
