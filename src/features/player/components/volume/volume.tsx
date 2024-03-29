import { ChangeEvent, FC, memo } from 'react';
import { Slider } from 'components/ui-kit';
import { playerModel } from '../../model';
import styles from './volume.module.scss';

export const Volume: FC = memo(() => {
  const { useVolume, changeVolume } = playerModel;

  const volume = useVolume();
  const computedVolume = Math.round(volume * 100);

  const onChangeRange = (event: ChangeEvent<HTMLInputElement>) => {
    changeVolume(+event.target.value / 100);
  };

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
