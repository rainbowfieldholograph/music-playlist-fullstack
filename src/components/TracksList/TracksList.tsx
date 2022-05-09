import { useReactiveVar } from '@apollo/client';
import { TrackItem } from '../TrackItem';
import { PlayerStore } from '../../store/PlayerStore';
import styles from './TracksList.module.scss';
import type { Track } from '../../generated';
import type { TracksListProps } from './TracksList.props';
import type { FC } from 'react';

export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  const { currentTrackVar, changePlaying } = PlayerStore;

  const currentTrack = useReactiveVar(currentTrackVar);
  const onClickTrack = (track: Track) => () => {
    currentTrackVar(track);
    changePlaying(true);
  };

  return (
    <ul className={styles.tracksBlock}>
      {tracks.map((track) => {
        const isActive = track.id === currentTrack?.id;
        return (
          <li key={track.id}>
            <TrackItem
              isActive={isActive}
              onClick={onClickTrack(track)}
              title={track.title}
              author={track.author}
            />
          </li>
        );
      })}
    </ul>
  );
};
