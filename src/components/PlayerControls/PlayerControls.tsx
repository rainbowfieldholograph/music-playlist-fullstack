import clsx from 'clsx';
import { FC } from 'react';
import { ReactComponent as ArrowIcon } from '../../img/arrow-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import { ButtonIcon } from '../ButtonIcon';
import styles from './PlayerControls.module.scss';

const { nextTrack, prevTrack } = PlayerStore;

export const PlayerControls: FC = () => {
  return (
    <div className={styles.controls}>
      <ButtonIcon
        aria-label="Previous audio"
        title="Previous audio"
        SvgIcon={ArrowIcon}
        className={clsx(styles.arrow, styles.inverse)}
        onClick={() => prevTrack()}
      />
      <ButtonIcon
        aria-label="Next audio"
        title="Next audio"
        SvgIcon={ArrowIcon}
        className={styles.arrow}
        onClick={() => nextTrack()}
      />
    </div>
  );
};
