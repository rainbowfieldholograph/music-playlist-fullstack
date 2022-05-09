import clsx from 'clsx';
import styles from './FullHeightBlock.module.scss';
import type { FC } from 'react';
import type { FullHeightBlockProps } from './FullHeightBlock.props';

export const FullHeightBlock: FC<FullHeightBlockProps> = ({
  children,
  className,
  childsCenter,
  ...rest
}) => (
  <div className={clsx(styles.block, className, { [styles.center]: childsCenter })} {...rest}>
    {children}
  </div>
);
