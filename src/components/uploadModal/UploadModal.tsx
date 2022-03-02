import { memo } from 'react'
import { UploadForm } from '../uploadForm/UploadForm'
import styles from './UploadModal.module.css'
import { UploadModalProps } from './UploadModal.props'

const UploadModal = memo(({ modal, setModal }: UploadModalProps) => {
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
