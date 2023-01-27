import clsx from 'clsx';
import { FC, memo } from 'react';
import { ButtonIcon } from 'components/UIKit';
import { ReactComponent as ArrowIcon } from 'assets/arrow-icon.svg';
import { playerStore } from '../..';
import styles from './Controls.module.scss';

export const Controls: FC = memo(() => {
  const { nextTrack, prevTrack } = playerStore;

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
