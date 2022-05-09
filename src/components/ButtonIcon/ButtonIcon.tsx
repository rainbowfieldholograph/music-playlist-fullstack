import clsx from 'clsx';
import styles from './ButtonIcon.module.scss';
import type { FC } from 'react';
import type { ButtonIconProps } from './ButtonIcon.props';

export const ButtonIcon: FC<ButtonIconProps> = ({ SvgIcon, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <SvgIcon className={styles.icon} />
    </button>
  );
};
