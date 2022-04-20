import clsx from 'clsx';
import { FC } from 'react';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
