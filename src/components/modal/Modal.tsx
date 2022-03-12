import { createPortal } from 'react-dom';
import { FC, useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';

const portalRootElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
  useEffect(() => {
    document.body.classList.add(styles._lock);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles._lock);
  }, [open]);

  if (!open || !portalRootElement) return <></>;

  return createPortal(
    <FocusTrap>
      <div onClick={onClose} className={styles.overlay}>
        <div
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          className={clsx(styles.modal, className)}
        >
          {children}
        </div>
      </div>
    </FocusTrap>,
    portalRootElement
  );
};
