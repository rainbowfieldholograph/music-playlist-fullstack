import { InputProps } from './Input.props';
import styles from './Input.module.css';
import clsx from 'clsx';

export const Input = ({ className, ...rest }: InputProps): JSX.Element => {
  return <input className={clsx(styles.input, className)} {...rest} />;
};
