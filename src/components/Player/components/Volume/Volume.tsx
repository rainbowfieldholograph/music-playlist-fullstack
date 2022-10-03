import { ChangeEvent, FC, memo } from 'react';
import { playerStore } from '../../../../stores';
import { Slider } from '../../../Slider';
import styles from './Volume.module.scss';

const { useVolume, changeVolume } = playerStore;

const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
  changeVolume(+event.target.value / 100);
};

export const Volume: FC = memo(() => {
  const volume = useVolume();
  const computedVolume = Math.round(volume * 100);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>Volume: {computedVolume}%</p>
      <Slider
        aria-label="Audio volume handler"
        title="Audio volume handler"
        value={computedVolume}
        onChange={onChangeRange}
      />
    </div>
  );
});

Volume.displayName = 'Volume';
