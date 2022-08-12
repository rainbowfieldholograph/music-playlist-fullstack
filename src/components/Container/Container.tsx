import clsx from 'clsx';
import styles from './Container.module.scss';
import type { FC } from 'react';
import type { ContainerProps } from './Container.props';

export const Container: FC<ContainerProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <div className={clsx(className, styles.container)} {...rest}>
      {children}
    </div>
  );
};
