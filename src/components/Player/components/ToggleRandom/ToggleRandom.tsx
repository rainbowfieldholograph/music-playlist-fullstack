import clsx from 'clsx';
import { FC, memo } from 'react';
import { ButtonIcon } from '../../../ButtonIcon';
import { ReactComponent as RandomIcon } from '../../../../assets/random-icon.svg';
import { playerStore } from '../../../../stores';
import styles from './ToggleRandom.module.scss';

const { useIsRandom, toggleRandom } = playerStore;

export const ToggleRandom: FC = memo(() => {
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
});

ToggleRandom.displayName = 'ToggleRandom';
