import clsx from 'clsx'
import { FC } from 'react'
import styles from './FullHeightBlock.module.css'
import { FullHeightBlockProps } from './FullHeightBlock.props'

export const FullHeightBlock: FC<FullHeightBlockProps> = ({
  children,
  className,
  ...rest
}): JSX.Element => (
  <div className={clsx(styles.block)} {...rest}>
    {children}
  </div>
)
