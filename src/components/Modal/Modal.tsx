import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import styles from './Modal.module.scss';
import type { FC } from 'react';
import type { ModalProps } from './Modal.props';

const portalRootElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }) => {
  const onClickEsc = (event: KeyboardEvent) => {
    if (event.key === 'Esc' || event.key === 'Escape') onClose();
  };

  useEffect(() => {
    document.body.classList.add(styles._lock);
  }, []);

  useEffect(() => {
    document.body.classList.toggle(styles._lock);
    if (open) {
      window.addEventListener('keydown', onClickEsc);
      return () => window.removeEventListener('keydown', onClickEsc);
    }
  }, [open]);

  if (!open || !portalRootElement) return null;

  return createPortal(
    <FocusLock>
      <div onClick={() => onClose()} className={styles.overlay}>
        <div
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          className={clsx(styles.modal, className)}
        >
          {children}
        </div>
      </div>
    </FocusLock>,
    portalRootElement
  );
};
