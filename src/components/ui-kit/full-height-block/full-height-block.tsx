import clsx from 'clsx';
import styles from './full-height-block.module.scss';
import type { FC } from 'react';
import type { FullHeightBlockProps } from './full-height-block.props';

export const FullHeightBlock: FC<FullHeightBlockProps> = ({
  children,
  className,
  childsCenter,
  ...rest
}) => (
  <div
    className={clsx(styles.block, className, { [styles.center]: childsCenter })}
    {...rest}
  >
    {children}
  </div>
);
