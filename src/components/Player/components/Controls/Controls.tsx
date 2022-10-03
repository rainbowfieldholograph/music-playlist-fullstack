import clsx from 'clsx';
import { FC, memo } from 'react';
import { ReactComponent as ArrowIcon } from '../../../../assets/arrow-icon.svg';
import { playerStore } from '../../../../stores';
import { ButtonIcon } from '../../../ButtonIcon';
import styles from './Controls.module.scss';

const { nextTrack, prevTrack } = playerStore;

export const Controls: FC = memo(() => {
  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="Previous audio"
        title="Previous audio"
        SvgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={prevTrack}
      />
      <ButtonIcon
        aria-label="Next audio"
        title="Next audio"
        SvgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={nextTrack}
      />
    </div>
  );
});

Controls.displayName = 'Controls';
