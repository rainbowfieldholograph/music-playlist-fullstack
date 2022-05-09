import { useReactiveVar } from '@apollo/client';
import { ButtonIcon } from '../ButtonIcon';
import { PlayerStore } from '../../store/PlayerStore';
import { ReactComponent as PauseIcon } from '../../img/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../img/play-icon.svg';
import styles from './PlayerTogglePlaying.module.scss';
import type { FC } from 'react';

const { toggleAudio, isPlayingVar } = PlayerStore;

export const PlayerPlayingToggle: FC = () => {
  const isPlaying = useReactiveVar(isPlayingVar);
  const showCorrectIcon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);
  const buttonLabel = isPlaying ? 'Pause audio (Space)' : 'Play audio (Space)';

  return (
    <ButtonIcon
      aria-label={buttonLabel}
      title={buttonLabel}
      className={styles.toggle}
      onClick={() => toggleAudio()}
      SvgIcon={showCorrectIcon(isPlaying)}
    />
  );
};
