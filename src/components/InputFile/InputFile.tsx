import clsx from 'clsx';
import { InputFileProps } from './InputFile.props';
import styles from './InputFile.module.scss';

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
