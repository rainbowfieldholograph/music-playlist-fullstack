import styles from './PlayerControls.module.css';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';

const PlayerControls = ({
  toggleAudio,
  nextTrack,
  prevTrack,
  playing,
}: PlayerControlsProps): JSX.Element => {
  return (
    <>
      <button
        className={clsx(styles.button, styles.toggleButton)}
        onClick={() => toggleAudio()}
      >
        {playing ? (
          <PauseIcon className={styles.toggleIcon} />
        ) : (
          <PlayIcon className={styles.toggleIcon} />
        )}
      </button>
      <div className={styles.rewindControls}>
        <button className={styles.button} onClick={() => prevTrack()}>
          <ArrowIcon className={clsx(styles.arrowIcon, styles.inverse)} />
        </button>
        <button className={styles.button} onClick={() => nextTrack()}>
          <ArrowIcon className={styles.arrowIcon} />
        </button>
      </div>
    </>
  );
};

export default PlayerControls;
