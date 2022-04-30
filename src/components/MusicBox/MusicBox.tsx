import clsx from 'clsx';
import { ReactComponent as MusicIcon } from '../../img/music-icon.svg';
import styles from './MusicBox.module.scss';
import { PlayerMusicImageProps } from './MusicBox.props';

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
