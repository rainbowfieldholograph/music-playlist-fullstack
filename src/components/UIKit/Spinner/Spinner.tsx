import clsx from 'clsx';
import styles from './Spinner.module.scss';
import type { FC } from 'react';
import type { SpinnerProps } from './Spinner.props';

export const Spinner: FC<SpinnerProps> = ({ className, ...rest }) => (
  <div className={clsx(styles.loading, className)} {...rest} />
);
