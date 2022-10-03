import { FC, memo } from 'react';
import { ButtonIcon } from '../../../ButtonIcon';
import { playerStore } from '../../../../stores';
import { ReactComponent as PauseIcon } from '../../../../assets/pause-icon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/play-icon.svg';
import styles from './TogglePlaying.module.scss';

const { toggleAudio, useIsPlaying } = playerStore;

export const TogglePlaying: FC = memo(() => {
  const isPlaying = useIsPlaying();
  const buttonLabel = isPlaying ? 'Pause audio (Space)' : 'Play audio (Space)';
  const icon = (isPlaying: boolean) => (isPlaying ? PauseIcon : PlayIcon);

  return (
    <ButtonIcon
      aria-label={buttonLabel}
      title={buttonLabel}
      className={styles.toggle}
      onClick={() => toggleAudio()}
      svgIcon={icon(isPlaying)}
    />
  );
});

TogglePlaying.displayName = 'TogglePlaying';
