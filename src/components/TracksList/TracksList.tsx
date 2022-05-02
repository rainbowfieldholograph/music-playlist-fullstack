import { useReactiveVar } from '@apollo/client';
import { FC } from 'react';
import { TrackItem } from '../TrackItem';
import { Track } from '../../generated';
import { PlayerStore } from '../../store/PlayerStore';
import styles from './TracksList.module.scss';
import { TracksListProps } from './TracksList.props';

export const TracksList: FC<TracksListProps> = ({ data }) => {
  const { currentTrackVar, changePlaying } = PlayerStore;

  const currentTrack = useReactiveVar(currentTrackVar);
  const onClickTrack = (track: Track) => () => {
    currentTrackVar(track);
    changePlaying(true);
  };

  return (
    <ul className={styles.tracksBlock}>
      {data.map((track) => (
        <li key={track.id}>
          <TrackItem
            isActive={track.id === currentTrack?.id}
            onClick={onClickTrack(track)}
            title={track.title}
            author={track.author}
          />
        </li>
      ))}
    </ul>
  );
};
