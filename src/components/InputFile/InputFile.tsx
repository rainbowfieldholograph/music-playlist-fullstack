import clsx from 'clsx';
import { InputFileProps } from './InputFile.props';
import styles from './InputFile.module.css';

export const InputFile = ({
  text,
  className,
  style,
  ...rest
}: InputFileProps): JSX.Element => {
  return (
    <label className={clsx(className, styles.label)} style={style}>
      {text}
      <input className={styles.input} type="file" accept="audio/*" {...rest} />
    </label>
  );
};
