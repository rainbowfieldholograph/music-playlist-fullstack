import { useReactiveVar } from '@apollo/client';
import { ButtonIcon } from '../ButtonIcon';
import { PlayerStore } from '../../store/PlayerStore';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import styles from './PlayerToggleButton.module.css';

const { toggleAudio, isPlayingVar } = PlayerStore;

export const PlayerToggleButton = () => {
  const isPlaying = useReactiveVar(isPlayingVar);
  const showCorrectIcon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);
  const buttonTitle = isPlaying ? 'Pause audio (Space)' : 'Play audio (Space)';

  return (
    <ButtonIcon
      aria-label={buttonTitle}
      title={buttonTitle}
      className={styles.toggle}
      onClick={() => toggleAudio()}
      SvgIcon={showCorrectIcon(isPlaying)}
    />
  );
};
