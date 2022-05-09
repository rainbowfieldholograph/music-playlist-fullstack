import clsx from 'clsx';
import styles from './InputFile.module.scss';
import type { FC } from 'react';
import type { InputFileProps } from './InputFile.props';

export const InputFile: FC<InputFileProps> = ({ text, className, style, ...rest }) => {
  return (
    <label className={clsx(className, styles.label)} style={style}>
      {text}
      <input className={styles.input} type="file" accept="audio/*" {...rest} />
    </label>
  );
};
