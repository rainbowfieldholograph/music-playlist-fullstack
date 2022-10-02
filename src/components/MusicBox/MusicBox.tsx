import clsx from 'clsx';
import { FC, memo } from 'react';
import { ReactComponent as MusicIcon } from '../../assets/music-icon.svg';
import styles from './MusicBox.module.scss';
import type { PlayerMusicImageProps } from './MusicBox.props';

export const MusicBox: FC<PlayerMusicImageProps> = ({ className, ...rest }) => {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <MusicIcon className={styles.icon} />
    </div>
  );
};

export const MusicBoxMemo = memo(MusicBox);
