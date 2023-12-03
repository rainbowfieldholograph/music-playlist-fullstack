import clsx from 'clsx';
import { FC, memo } from 'react';
import { ButtonIcon } from 'components/ui-kit';
import ArrowIcon from 'assets/arrow-icon.svg?react';
import { playerModel } from '../../model';
import styles from './controls.module.scss';

export const Controls: FC = memo(() => {
  const { nextTrack, prevTrack } = playerModel;

  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="Previous audio"
        title="Previous audio"
        svgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={prevTrack}
      />
      <ButtonIcon
        aria-label="Next audio"
        title="Next audio"
        svgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={nextTrack}
      />
    </div>
  );
});

Controls.displayName = 'Controls';
