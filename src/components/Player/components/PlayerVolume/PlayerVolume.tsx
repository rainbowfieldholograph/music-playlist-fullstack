import { ChangeEvent, FC, memo } from 'react';
import { playerStore } from '../../../../stores';
import { Slider } from '../../../Slider';
import styles from './PlayerVolume.module.scss';

const { useVolume, changeVolume } = playerStore;

const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
  changeVolume(+event.target.value / 100);
};

export const PlayerVolume: FC = memo(() => {
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

PlayerVolume.displayName = 'PlayerVolume';
