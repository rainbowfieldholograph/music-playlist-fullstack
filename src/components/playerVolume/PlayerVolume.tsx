import { useReactiveVar } from '@apollo/client';
import { ChangeEvent, useEffect } from 'react';
import { PlayerStore } from '../../store/PlayerStore';
import styles from './PlayerVolume.module.css';
import { PlayerVolumeProps } from './PlayerVolume.props';

const { volumeVar, audio } = PlayerStore;

const handleVolume = (event: ChangeEvent<HTMLInputElement>) => {
  const volumeCompute = +event.target.value / 100;
  volumeVar(volumeCompute);
};

export const PlayerVolume = ({}: PlayerVolumeProps) => {
  const volume = useReactiveVar(volumeVar);
  const computedVolume = Math.round(volume * 100);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  return (
    <div className={styles.box}>
      <p className={styles.title}>Volume: {computedVolume}%</p>
      <input type="range" value={computedVolume} onChange={handleVolume} />
    </div>
  );
};
