import styles from './ErrorBlock.module.css';
import { ErrorBlockProps } from './ErrorBlock.props';

export const ErorrBlock = ({ className, ...rest }: ErrorBlockProps): JSX.Element => (
  <div className={className} {...rest}>
    <p className={styles.title}>Connection Error</p>
  </div>
);