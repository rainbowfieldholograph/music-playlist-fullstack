import styles from './Loading.module.css'

export const Loading = (): JSX.Element => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.loading} />
    </div>
  )
}
