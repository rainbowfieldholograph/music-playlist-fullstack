import clsx from 'clsx';
import styles from './spinner.module.scss';
import type { FC } from 'react';
import type { SpinnerProps } from './spinner.props';

export const Spinner: FC<SpinnerProps> = ({ className, ...rest }) => (
  <div className={clsx(styles.loading, className)} {...rest} />
);
