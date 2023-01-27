import clsx from 'clsx';
import { FC, memo } from 'react';
import styles from './InputFile.module.scss';
import type { InputFileProps } from './InputFile.props';

export const InputFile: FC<InputFileProps> = ({
  text,
  className,
  style,
  ...rest
}) => {
  return (
    <label className={clsx(className, styles.label)} style={style}>
      {text}
      <input className={styles.input} type="file" accept="audio/*" {...rest} />
    </label>
  );
};

export const InputFileMemo = memo(InputFile);
