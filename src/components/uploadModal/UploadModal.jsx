import { memo } from 'react'
import styles from './UploadModal.module.css'
import UploadForm from '../uploadForm/UploadForm'

const UploadModal = memo(function ({ modal, setModal }) {
  return (
    <div
      onClick={() => setModal(!modal)}
      className={modal ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      <div onClick={(event) => event.stopPropagation()} className={styles.inner}>
        <UploadForm setModal={setModal} />
      </div>
    </div>
  )
})

export default UploadModal
