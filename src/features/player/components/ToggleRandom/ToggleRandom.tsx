import clsx from 'clsx';
import { FC, memo } from 'react';
import { ButtonIcon } from 'components';
import { ReactComponent as RandomIcon } from 'assets/random-icon.svg';
import { playerStore } from '../..';
import styles from './ToggleRandom.module.scss';

export const ToggleRandom: FC = memo(() => {
  const { useIsRandom, toggleRandom } = playerStore;

  const isRandom = useIsRandom();
  const buttonLabel = isRandom ? 'Disable random' : 'Enable random';

  return (
    <ButtonIcon
      aria-label={buttonLabel}
      title={buttonLabel}
      className={clsx(styles.toggle, { [styles.active]: isRandom })}
      onClick={() => toggleRandom()}
      svgIcon={RandomIcon}
    />
  );
});

ToggleRandom.displayName = 'ToggleRandom';
