import clsx from 'clsx';
import { Spinner } from '../Spinner';
import styles from './UploadingBlock.module.scss';
import { UploadingBlockProps } from './UploadingBlock.props';

export const UploadingBlock = ({
  title = 'Uploading audio file. Please wait.',
  className,
}: UploadingBlockProps): JSX.Element => {
  return (
    <div className={clsx(styles.block, className)}>
      <p className={styles.title}>{title}</p>
      <Spinner />
    </div>
  );
};
