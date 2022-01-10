import styles from './FullHeightBlock.module.css'

const FullHeightBlock = ({ children, ...rest }) => (
  <div className={styles.block} {...rest}>
    {children}
  </div>
)

export default FullHeightBlock
