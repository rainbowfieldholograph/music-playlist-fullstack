import styles from './ErrorBlock.module.css'

export const ErorrBlock = (): JSX.Element => {
  return (
    <div>
      <p className={styles.title}>Connection Error</p>
    </div>
  )
}
