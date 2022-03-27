import { ButtonIcon } from '../ButtonIcon';
import styles from './PlayerToggleButton.module.css';
import { PlayerStore } from '../../store/PlayerStore';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import { PlayerToggleButtonProps } from './PlayerToggleButton.props';
import { useReactiveVar } from '@apollo/client';

const { toggleAudio, isPlayingVar } = PlayerStore;

export const PlayerToggleButton = ({}: PlayerToggleButtonProps) => {
  const isPlaying = useReactiveVar(isPlayingVar);
  const showCorrectIcon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);

  return (
    <ButtonIcon
      className={styles.toggle}
      onClick={() => toggleAudio()}
      SvgIcon={showCorrectIcon(isPlaying)}
    />
  );
};
