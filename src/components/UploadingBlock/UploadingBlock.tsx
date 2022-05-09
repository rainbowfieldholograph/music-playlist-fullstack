import clsx from 'clsx';
import { Spinner } from '../Spinner';
import styles from './UploadingBlock.module.scss';
import type { FC } from 'react';
import type { UploadingBlockProps } from './UploadingBlock.props';

export const UploadingBlock: FC<UploadingBlockProps> = ({
  title = 'Uploading audio file. Please wait.',
  className,
}) => {
  return (
    <div className={clsx(styles.block, className)}>
      <p className={styles.title}>{title}</p>
      <Spinner />
    </div>
  );
};
