import clsx from 'clsx';
import { Spinner } from 'components';
import styles from './UploadingBlock.module.scss';
import type { FC } from 'react';
import type { UploadingBlockProps } from './UploadingBlock.props';

const initialTitle = 'Uploading audio file. Please wait.';

export const UploadingBlock: FC<UploadingBlockProps> = ({
  title = initialTitle,
  className,
  style,
}) => {
  return (
    <div style={style} className={clsx(styles.block, className)}>
      <p className={styles.title}>{title}</p>
      <Spinner />
    </div>
  );
};
