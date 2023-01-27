import clsx from 'clsx';
import styles from './ButtonIcon.module.scss';
import type { FC } from 'react';
import type { ButtonIconProps } from './ButtonIcon.props';

export const ButtonIcon: FC<ButtonIconProps> = ({
  svgIcon,
  className,
  ...rest
}) => {
  const Icon = svgIcon;

  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <Icon className={styles.icon} />
    </button>
  );
};
