import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import clsx from 'clsx';
import { FC } from 'react';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};
