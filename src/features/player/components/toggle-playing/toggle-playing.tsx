import { FC, memo } from 'react';
import { ButtonIcon } from 'components/ui-kit';
import PauseIcon from 'assets/pause-icon.svg?react';
import PlayIcon from 'assets/play-icon.svg?react';
import { playerStore } from '../..';
import styles from './toggle-playing.module.scss';

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
