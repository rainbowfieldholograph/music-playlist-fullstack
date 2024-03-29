import { Slider } from 'components/ui-kit';
import { formatTime } from 'utils';
import { playerModel } from '../../model';
import styles from './info.module.scss';
import type { ChangeEvent, FC } from 'react';

const computeDuration = (currentTime: number, duration: number): number => {
  const result = Math.round((currentTime * 100) / duration);
  return isNaN(result) ? 0 : result;
};

export const Info: FC = () => {
  const {
    changeCurrentTime,
    useCanChangeTime,
    useDuration,
    useCurrentTrack,
    useCurrentTime,
  } = playerModel;

  const canChangeTime = useCanChangeTime();
  const duration = useDuration();
  const currentTrack = useCurrentTrack();
  const currentTime = useCurrentTime();

  const handleProgress = (event: ChangeEvent<HTMLInputElement>) => {
    const progressValue = +event.target.value;
    const timeCompute = (progressValue * duration) / 100;
    changeCurrentTime(timeCompute);
  };

  return (
    <div className={styles.info}>
      <div className={styles.box}>
        <h2 className={styles.title}>{currentTrack?.title}</h2>
        <p>{formatTime(duration)}</p>
      </div>
      <div className={styles.box}>
        <h3 className={styles.title}>{currentTrack?.author}</h3>
        <p>{formatTime(currentTime)}</p>
      </div>
      <Slider
        aria-label="Audio current time handler"
        title="Audio current time handler"
        disabled={!canChangeTime}
        onChange={handleProgress}
        value={computeDuration(currentTime, duration)}
      />
    </div>
  );
};
