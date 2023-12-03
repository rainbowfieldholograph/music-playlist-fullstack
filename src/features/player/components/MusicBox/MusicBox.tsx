import clsx from 'clsx';
import { FC, memo } from 'react';
import MusicIcon from 'assets/music-icon.svg?react';
import styles from './MusicBox.module.scss';
import type { PlayerMusicImageProps } from './MusicBox.props';

export const MusicBox: FC<PlayerMusicImageProps> = memo(({ className, ...rest }) => {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <MusicIcon className={styles.icon} />
    </div>
  );
});

MusicBox.displayName = 'MusicBox';
