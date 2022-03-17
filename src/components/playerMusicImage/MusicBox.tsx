import styles from './MusicBox.module.css';
import { PlayerMusicImageProps } from './MusicBox.props';
import { ReactComponent as MusicIcon } from '../../img/music-icon.svg';
import clsx from 'clsx';

export const PlayerMusicImage = ({
  className,
  ...rest
}: PlayerMusicImageProps): JSX.Element => {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <MusicIcon className={styles.icon} />
    </div>
  );
};
