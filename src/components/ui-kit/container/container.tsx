import clsx from 'clsx';
import styles from './container.module.scss';
import type { FC } from 'react';
import type { ContainerProps } from './container.props';

export const Container: FC<ContainerProps> = ({ className, children, ...rest }) => {
  return (
    <div className={clsx(className, styles.container)} {...rest}>
      {children}
    </div>
  );
};
