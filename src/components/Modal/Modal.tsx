import { createPortal } from 'react-dom';
import { FC, useEffect } from 'react';
import clsx from 'clsx';
import FocusTrap from 'focus-trap-react';
import styles from './Modal.module.scss';
import { ModalProps } from './Modal.props';

const portalRootElement = document.getElementById('modal');

export const Modal: FC<ModalProps> = ({ className, children, open, onClose }): JSX.Element => {
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

  if (!open || !portalRootElement) return <></>;

  return createPortal(
    <FocusTrap>
      <div onClick={() => onClose()} className={styles.overlay}>
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
