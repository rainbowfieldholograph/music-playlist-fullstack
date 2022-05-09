import clsx from 'clsx';
import styles from './Input.module.scss';
import type { FC } from 'react';
import type { InputProps } from './Input.props';

export const Input: FC<InputProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.input, className)} {...rest} />;
};
