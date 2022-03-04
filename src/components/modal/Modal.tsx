import { createPortal } from 'react-dom'
import { FC } from 'react'
import styles from './Modal.module.css'
import { ModalProps } from './Modal.props'
import clsx from 'clsx'

const portalRootElement = document.getElementById('modal')

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
  if (!open || !portalRootElement) return <></>

  return createPortal(
    <>
      <div onClick={onClose} className={styles.overlay} />
      <div className={clsx(styles.modal, className)}>{children}</div>
    </>,
    portalRootElement
  )
}
