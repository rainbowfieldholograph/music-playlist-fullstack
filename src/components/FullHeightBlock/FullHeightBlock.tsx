import clsx from 'clsx';
import { FC } from 'react';
import styles from './FullHeightBlock.module.scss';
import { FullHeightBlockProps } from './FullHeightBlock.props';

export const FullHeightBlock: FC<FullHeightBlockProps> = ({
  children,
  className,
  childsCenter,
  ...rest
}): JSX.Element => (
  <div className={clsx(styles.block, className, { [styles.center]: childsCenter })} {...rest}>
    {children}
  </div>
);
