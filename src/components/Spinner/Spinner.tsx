import clsx from 'clsx';
import styles from './Spinner.module.scss';
import { SpinnerProps } from './Spinner.props';

export const Spinner = ({ className }: SpinnerProps): JSX.Element => (
  <div className={clsx(styles.loading, className)} />
);
