import clsx from 'clsx';
import { ReactComponent as MusicIcon } from '../../img/music-icon.svg';
import styles from './MusicBox.module.scss';
import type { FC } from 'react';
import type { PlayerMusicImageProps } from './MusicBox.props';

export const PlayerMusicImage: FC<PlayerMusicImageProps> = ({ className, ...rest }) => {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <MusicIcon className={styles.icon} />
    </div>
  );
};
