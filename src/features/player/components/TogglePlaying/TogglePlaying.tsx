import { FC, memo } from 'react';
import { ButtonIcon } from 'components';
import { ReactComponent as PauseIcon } from 'assets/pause-icon.svg';
import { ReactComponent as PlayIcon } from 'assets/play-icon.svg';
import { playerStore } from '../..';
import styles from './TogglePlaying.module.scss';

export const TogglePlaying: FC = memo(() => {
  const { toggleAudio, useIsPlaying } = playerStore;

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
