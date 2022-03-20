import styles from './PlayerControls.module.css';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import { useQuery, useReactiveVar } from '@apollo/client';
import { GetAllTracksDocument, GetAllTracksQuery } from '../../generated';

const { prevTrack, nextTrack, toggleAudio, isPlayingVar } = PlayerStore;

export const PlayerControls = ({}: PlayerControlsProps): JSX.Element => {
  const { data } = useQuery<GetAllTracksQuery>(GetAllTracksDocument);
  const tracks = data?.getAllTracks;

  const isPlaying = useReactiveVar(isPlayingVar);

  const showCorrectIcon = (isPlaying: boolean) => {
    return isPlaying ? (
      <PauseIcon className={styles.toggleIcon} />
    ) : (
      <PlayIcon className={styles.toggleIcon} />
    );
  };

  return (
    <>
      <button
        className={clsx(styles.button, styles.toggleButton)}
        onClick={() => toggleAudio()}
      >
        {showCorrectIcon(isPlaying)}
      </button>
      <div className={styles.rewindControls}>
        <button className={styles.button} onClick={() => prevTrack(tracks)}>
          <ArrowIcon className={clsx(styles.arrowIcon, styles.inverse)} />
        </button>
        <button className={styles.button} onClick={() => nextTrack(tracks)}>
          <ArrowIcon className={styles.arrowIcon} />
        </button>
      </div>
    </>
  );
};
