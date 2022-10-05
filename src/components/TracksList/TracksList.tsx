import { FC, useCallback } from 'react';
import { TrackItem } from '../TrackItem';
import { playerStore } from '../../stores';
import styles from './TracksList.module.scss';
import type { Track } from '../../generated';
import type { TracksListProps } from './TracksList.props';

const { useCurrentTrack, changePlaying, changeCurrentTrack } = playerStore;

export const TracksList: FC<TracksListProps> = ({ tracks }) => {
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
