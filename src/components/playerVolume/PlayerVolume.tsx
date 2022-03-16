import styles from './PlayerVolume.module.css';
import { PlayerVolumeProps } from './PlayerVolume.props';

export const PlayerVolume = ({ volumeState, handleVolume }: PlayerVolumeProps) => {
  const computedVolume = Math.round(volumeState * 100);
  return (
    <div className={styles.box}>
      <p className={styles.title}>Volume: {computedVolume}%</p>
      <input type="range" value={computedVolume} onChange={(e) => handleVolume(e)} />
    </div>
  );
};
