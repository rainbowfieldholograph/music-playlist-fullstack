import { ButtonIcon } from '../../../ButtonIcon';
import { playerStore } from '../../../../stores';
import { ReactComponent as PauseIcon } from '../../../../assets/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/play-icon.svg';
import styles from './PlayerTogglePlaying.module.scss';
import type { FC } from 'react';

const { toggleAudio, useIsPlaying } = playerStore;

export const PlayerPlayingToggle: FC = () => {
  const isPlaying = useIsPlaying();
  const buttonLabel = isPlaying ? 'Pause audio (Space)' : 'Play audio (Space)';
  const getIcon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);

  return (
    <ButtonIcon
      aria-label={buttonLabel}
      title={buttonLabel}
      className={styles.toggle}
      onClick={() => toggleAudio()}
      SvgIcon={getIcon(isPlaying)}
    />
  );
};
