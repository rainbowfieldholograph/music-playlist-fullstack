import clsx from 'clsx';
import styles from './input.module.scss';
import type { FC } from 'react';
import type { InputProps } from './input.props';

export const Input: FC<InputProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.input, className)} {...rest} />;
};
