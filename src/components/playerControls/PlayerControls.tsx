import styles from './PlayerControls.module.css';
import { PlayerControlsProps } from './PlayerControls.props';
import clsx from 'clsx';
import playIcon from '../../img/playIcon.svg';
import arrowIcon from '../../img/arrowIcon.svg';
import pauseIcon from '../../img/pauseIcon.svg';

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
        <img src={playing ? pauseIcon : playIcon} alt="play" />
      </button>
      <div className={styles.rewindControls}>
        <button className={styles.button} onClick={() => prevTrack()}>
          <img className={clsx(styles.arrow, styles.inverse)} src={arrowIcon} alt="back" />
        </button>
        <button className={styles.button} onClick={() => nextTrack()}>
          <img className={styles.arrow} src={arrowIcon} alt="forward" />
        </button>
      </div>
    </>
  );
};

export default PlayerControls;
