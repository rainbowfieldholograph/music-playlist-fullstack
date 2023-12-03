import { FC, useCallback } from 'react';
import { playerStore } from 'features/player';
import { TrackItem } from 'features/tracks';
import styles from './tracks-list.module.scss';
import type { Track } from 'generated';
import type { TracksListProps } from './tracks-list.props';

export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  const { useCurrentTrack, changePlaying, changeCurrentTrack } = playerStore;

  const currentTrack = useCurrentTrack();

  const onClickTrack = useCallback((track: Track) => {
    changeCurrentTrack(track);
    changePlaying(true);
  }, []);

  const listItems = tracks.map((track) => {
    const isActive = track.id === currentTrack?.id;

    return (
      <li key={track.id}>
        <TrackItem
          track={track}
          isActive={isActive}
          changeTrackHandler={onClickTrack}
        />
      </li>
    );
  });

  return <ul className={styles.tracksBlock}>{listItems}</ul>;
};
