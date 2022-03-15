import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './PlayerControls.module.css';
import {
  faPlayCircle,
  faStepBackward,
  faStepForward,
  faPauseCircle,
} from '@fortawesome/free-solid-svg-icons';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';

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
        <FontAwesomeIcon
          size="3x"
          icon={playing ? faPauseCircle : faPlayCircle}
          color="black"
        />
      </button>
      <div className={styles.rewindControls}>
        <button className={styles.button} onClick={() => prevTrack()}>
          <FontAwesomeIcon size="2x" icon={faStepBackward} color="black" />
        </button>
        <button className={styles.button} onClick={() => nextTrack()}>
          <FontAwesomeIcon size="2x" icon={faStepForward} color="black" />
        </button>
      </div>
    </>
  );
};

export default PlayerControls;
