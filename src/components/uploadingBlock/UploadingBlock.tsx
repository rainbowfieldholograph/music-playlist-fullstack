import clsx from 'clsx';
import { Spinner } from '../spinner/Spinner';
import styles from './UploadingBlock.module.css';
import { UploadingBlockProps } from './UploadingBlock.props';

export const UploadingBlock = ({
  title = 'Uploading track. Please wait.',
  className,
}: UploadingBlockProps): JSX.Element => {
  return (
    <div className={clsx(styles.block, className)}>
      <p className={styles.title}>{title}</p>
      <Spinner />
    </div>
  );
};
