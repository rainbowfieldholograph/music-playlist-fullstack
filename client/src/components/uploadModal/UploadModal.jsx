import React from 'react'
import styles from './UploadModal.module.css'
import UploadForm from '../uploadForm/UploadForm'

const UploadModal = React.memo(function ({ modal, setModal }) {
  return (
    <div
      onClick={() => setModal(!modal)}
      className={modal ? `${styles.wrapper} ${styles.active}` : styles.wrapper}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.inner}>
        <UploadForm setModal={setModal} />
      </div>
    </div>
  )
})

export default UploadModal
