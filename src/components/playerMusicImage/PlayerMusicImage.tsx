import styles from './PlayerMusicImage.module.css';
import { PlayerMusicImageProps } from './PlayerMusicImage.props';
import musicIcon from '../../img/musicIcon.svg';

export const PlayerMusicImage = ({}: PlayerMusicImageProps): JSX.Element => {
  return (
    <div className={styles.box}>
      <img className={styles.image} src={musicIcon} alt="music" />
    </div>
  );
};
