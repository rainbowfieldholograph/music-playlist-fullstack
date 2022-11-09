import { ButtonIcon, Modal } from 'components';
import { ReactComponent as CloseButton } from 'assets/close-icon.svg';
import { UploadForm } from '../UploadForm';
import styles from './UploadModal.module.scss';
import type { FC } from 'react';
import type { UploadModalProps } from './UploadModal.props';

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
