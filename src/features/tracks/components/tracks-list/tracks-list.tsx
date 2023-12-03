import { FC, useCallback } from 'react';
import { playerModel } from 'features/player/model';
import { TrackItem } from '../track-item';
import styles from './tracks-list.module.scss';
import type { Track } from 'generated';
import type { TracksListProps } from './tracks-list.props';

export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  const { useCurrentTrack, changePlaying, changeCurrentTrack } = playerModel;

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
