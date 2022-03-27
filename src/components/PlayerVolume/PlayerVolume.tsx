import { useReactiveVar } from '@apollo/client';
import { ChangeEvent } from 'react';
import { PlayerStore } from '../../store/PlayerStore';
import styles from './PlayerVolume.module.css';
import { PlayerVolumeProps } from './PlayerVolume.props';

const { volumeVar, changeVolume } = PlayerStore;

const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
  changeVolume(+event.target.value / 100);
};

export const PlayerVolume = ({}: PlayerVolumeProps) => {
  const volume = useReactiveVar(volumeVar);
  const computedVolume = Math.round(volume * 100);

  return (
    <div className={styles.box}>
      <p className={styles.title}>Volume: {computedVolume}%</p>
      <input
        aria-label="audio volume"
        type="range"
        value={computedVolume}
        onChange={onChangeRange}
      />
    </div>
  );
};