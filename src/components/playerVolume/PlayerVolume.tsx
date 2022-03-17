import { ChangeEvent } from 'react';
import PlayerStore from '../../graphql/PlayerStore';
import styles from './PlayerVolume.module.css';
import { PlayerVolumeProps } from './PlayerVolume.props';

const { volumeVar } = PlayerStore;

const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
  const volumeCompute = +event.target.value / 100;
  volumeVar(volumeCompute);
};

export const PlayerVolume = ({ volumeState }: PlayerVolumeProps) => {
  const computedVolume = Math.round(volumeState * 100);
  return (
    <div className={styles.box}>
      <p className={styles.title}>Volume: {computedVolume}%</p>
      <input type="range" value={computedVolume} onChange={(e) => handleVolume(e)} />
    </div>
  );
};
