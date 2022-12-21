import { MouseEventHandler, useEffect } from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import { Portal } from 'components';
import styles from './Modal.module.scss';
import type { FC } from 'react';
import type { ModalProps } from './Modal.props';

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpened,
  onClose,
}) => {
  useEffect(() => {
    document.body.classList.add(styles._lock);
  }, []);

  useEffect(() => {
    const onClickEsc = (event: KeyboardEvent) => {
      if (event.key === 'Esc' || event.key === 'Escape') onClose();
    };

    if (isOpened) {
      window.addEventListener('keydown', onClickEsc);
      return () => window.removeEventListener('keydown', onClickEsc);
    }
  }, [onClose, isOpened]);

  useEffect(() => {
    document.body.classList.toggle(styles._lock);
  }, [isOpened]);

  if (!isOpened) return null;

  const onClickOverlay = () => {
    onClose();
  };

  const onClickModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <FocusLock>
        <div onClick={onClickOverlay} className={styles.overlay}>
          <div
            onClick={onClickModal}
            role="dialog"
            className={clsx(styles.modal, className)}
          >
            {children}
          </div>
        </div>
      </FocusLock>
    </Portal>
  );
};
