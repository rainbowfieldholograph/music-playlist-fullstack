import clsx from 'clsx';
import { FC } from 'react';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input: FC<InputProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.input, className)} {...rest} />;
};
