import { FC } from 'react';
import styles from './ErrorBlock.module.scss';
import { ErrorBlockProps } from './ErrorBlock.props';

export const ErorrBlock: FC<ErrorBlockProps> = ({ className, ...rest }) => (
  <div className={className} {...rest}>
    <p className={styles.title}>Connection Error</p>
  </div>
);
