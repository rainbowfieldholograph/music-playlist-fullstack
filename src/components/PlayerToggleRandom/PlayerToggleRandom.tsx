import { useReactiveVar } from '@apollo/client';
import clsx from 'clsx';
import { ButtonIcon } from '../ButtonIcon';
import { ReactComponent as RandomIcon } from '../../img/random-icon.svg';
import { PlayerStore } from '../../store/PlayerStore';
import styles from './PlayerToggleRandom.module.css';

const { isRandomVar, toggleRandom } = PlayerStore;

export const PlayerToggleRandom = () => {
  const isRandom = useReactiveVar(isRandomVar);
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
