import styles from './PlayerMusicImage.module.css';
import { PlayerMusicImageProps } from './PlayerMusicImage.props';
import musicIcon from '../../img/music-icon.svg';
import clsx from 'clsx';

export const PlayerMusicImage = ({
  className,
  ...rest
}: PlayerMusicImageProps): JSX.Element => {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <img className={styles.image} src={musicIcon} alt="music" />
    </div>
  );
};
