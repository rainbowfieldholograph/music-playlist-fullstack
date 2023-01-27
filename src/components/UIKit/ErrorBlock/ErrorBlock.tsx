import styles from './ErrorBlock.module.scss';
import type { FC } from 'react';
import type { ErrorBlockProps } from './ErrorBlock.props';

export const ErrorBlock: FC<ErrorBlockProps> = ({ className, ...rest }) => (
  <div className={className} {...rest}>
    <p className={styles.title}>Connection Error</p>
  </div>
);
