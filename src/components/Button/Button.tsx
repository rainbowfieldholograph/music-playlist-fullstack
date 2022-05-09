import clsx from 'clsx';
import styles from './Button.module.scss';
import type { FC } from 'react';
import type { ButtonProps } from './Button.props';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
