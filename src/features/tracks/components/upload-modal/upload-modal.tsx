import { ButtonIcon, Modal } from 'components/ui-kit';
import CloseButton from 'assets/close-icon.svg?react';
import { UploadForm } from '../upload-form';
import styles from './upload-modal.module.scss';
import type { FC } from 'react';
import type { UploadModalProps } from './upload-modal.props';

export const UploadModal: FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const closeButtonLabel = 'Close modal window';

  return (
    <Modal className={styles.modal} isOpened={isOpen} onClose={onClose}>
      <div className={styles.head}>
        <h1 className={styles.title}>Upload audio file</h1>
        <ButtonIcon
          aria-label={closeButtonLabel}
          title={closeButtonLabel}
          onClick={onClose}
          className={styles.closeButton}
          svgIcon={CloseButton}
        />
      </div>
      <UploadForm onSubmit={onClose} />
    </Modal>
  );
};
