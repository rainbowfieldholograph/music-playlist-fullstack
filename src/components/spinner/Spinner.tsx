import clsx from 'clsx';
import styles from './Spinner.module.css';
import { SpinnerProps } from './Spinner.props';

export const Spinner = ({ className }: SpinnerProps): JSX.Element => (
  <div className={clsx(styles.loading, className)} />
);
