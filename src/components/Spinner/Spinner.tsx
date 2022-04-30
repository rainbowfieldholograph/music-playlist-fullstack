import clsx from 'clsx';
import { FC } from 'react';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './Spinner.props';

export const Spinner: FC<SpinnerProps> = ({ className }) => (
  <div className={clsx(styles.loading, className)} />
);
