import clsx from 'clsx';
import { FC } from 'react';
import { InputFileProps } from './InputFile.props';
import styles from './InputFile.module.scss';

export const InputFile: FC<InputFileProps> = ({ text, className, style, ...rest }) => {
  return (
    <label className={clsx(className, styles.label)} style={style}>
      {text}
      <input className={styles.input} type="file" accept="audio/*" {...rest} />
    </label>
  );
};
