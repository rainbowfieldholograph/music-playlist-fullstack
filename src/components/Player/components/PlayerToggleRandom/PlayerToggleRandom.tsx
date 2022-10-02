import clsx from 'clsx';
import { ButtonIcon } from '../../../ButtonIcon';
import { ReactComponent as RandomIcon } from '../../../../assets/random-icon.svg';
import { playerStore } from '../../../../stores';
import styles from './PlayerToggleRandom.module.scss';
import type { FC } from 'react';

const { useIsRandom, toggleRandom } = playerStore;

export const PlayerToggleRandom: FC = () => {
  const isRandom = useIsRandom();
  const buttonLabel = isRandom ? 'Disable random' : 'Enable random';

  return (
    <ButtonIcon
      aria-label={buttonLabel}
      title={buttonLabel}
      className={clsx(styles.toggle, { [styles.active]: isRandom })}
      onClick={() => toggleRandom()}
      SvgIcon={RandomIcon}
    />
  );
};
