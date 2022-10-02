import { TrackItem } from '../TrackItem';
import { playerStore } from '../../stores';
import styles from './TracksList.module.scss';
import type { Track } from '../../generated';
import type { TracksListProps } from './TracksList.props';
import type { FC } from 'react';

const { useCurrentTrack, changePlaying, changeCurrentTrack } = playerStore;

export const TracksList: FC<TracksListProps> = ({ tracks }) => {
  const currentTrack = useCurrentTrack();

  const onClickTrack = (track: Track) => () => {
    changeCurrentTrack(track);
    changePlaying(true);
  };

  const listItems = tracks.map((track) => {
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
  });

  return <ul className={styles.tracksBlock}>{listItems}</ul>;
};
