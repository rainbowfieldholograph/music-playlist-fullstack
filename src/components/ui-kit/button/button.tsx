import clsx from 'clsx';
import { FC, memo } from 'react';
import styles from './button.module.scss';
import type { ButtonProps } from './button.props';

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      {children}
    </button>
  );
};

export const ButtonMemo = memo(Button);
