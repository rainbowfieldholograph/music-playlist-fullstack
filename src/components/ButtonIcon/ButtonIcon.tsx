import clsx from 'clsx';
import { FC } from 'react';
import { ButtonIconProps } from './ButtonIcon.props';
import styles from './ButtonIcon.module.scss';

export const ButtonIcon: FC<ButtonIconProps> = ({ SvgIcon, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <SvgIcon className={styles.icon} />
    </button>
  );
};
