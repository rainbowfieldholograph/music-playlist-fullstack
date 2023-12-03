import clsx from 'clsx';
import styles from './button-icon.module.scss';
import type { FC } from 'react';
import type { ButtonIconProps } from './button-icon.props';

export const ButtonIcon: FC<ButtonIconProps> = ({ svgIcon, className, ...rest }) => {
  const Icon = svgIcon;

  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <Icon className={styles.icon} />
    </button>
  );
};
