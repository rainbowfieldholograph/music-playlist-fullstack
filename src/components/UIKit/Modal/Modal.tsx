import { MouseEventHandler, useEffect, useState } from 'react';
import clsx from 'clsx';
import FocusLock from 'react-focus-lock';
import { useLatest } from 'hooks/useLatest/useLatest';
import { Portal } from '../Portal';
import styles from './Modal.module.scss';
import type { FC } from 'react';
import type { ModalProps } from './Modal.props';

const modalStack: string[] = [];

const modalStackRemove = (modalId: string) => {
  const modalIndex = modalStack.indexOf(modalId);
  if (modalIndex !== -1) modalStack.splice(modalIndex, 1);
};

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpened,
  onClose,
}) => {
  const latestOnClose = useLatest(onClose);
  const [modalId] = useState(() => crypto.randomUUID());

  useEffect(() => {
    if (isOpened) {
      const handleEscClick = (event: KeyboardEvent) => {
        if (event.key === 'Esc' || event.key === 'Escape') {
          const lastModalStackElement = modalStack.at(-1);

          if (lastModalStackElement === modalId) {
            latestOnClose.current();
            modalStack.pop();
          }
        }
      };

      modalStack.push(modalId);
      window.addEventListener('keydown', handleEscClick);

      return () => {
        window.removeEventListener('keydown', handleEscClick);
      };
    }

    modalStackRemove(modalId);
  }, [isOpened, modalId, latestOnClose]);

  useEffect(() => {
    document.body.classList.add(styles._lock);
  }, []);

  useEffect(() => {
    if (modalStack.length === 0) {
      document.body.classList.remove(styles._lock);
    }
  }, [isOpened]);

  if (!isOpened) return null;

  const handleClickOverlay = () => {
    latestOnClose.current();
  };

  const handleClickModal: MouseEventHandler = (event) => {
    event.stopPropagation();
  };

  return (
    <Portal>
      <FocusLock>
        <div onClick={handleClickOverlay} className={styles.overlay}>
          <div
            onClick={handleClickModal}
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
