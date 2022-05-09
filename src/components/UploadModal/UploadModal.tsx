import { Modal } from '../Modal';
import { UploadForm } from '../UploadForm';
import { ReactComponent as CloseButton } from '../../img/close-icon.svg';
import { ButtonIcon } from '../ButtonIcon';
import styles from './UploadModal.module.scss';
import type { FC } from 'react';
import type { UploadModalProps } from './UploadModal.props';

export const UploadModal: FC<UploadModalProps> = ({ isOpen, onClose }) => {
  const closeButtonLable = 'Close modal window';

  return (
    <Modal className={styles.modal} open={isOpen} onClose={onClose}>
      <div className={styles.head}>
        <h1 className={styles.title}>Upload audio file</h1>
        <ButtonIcon
          aria-label={closeButtonLable}
          title={closeButtonLable}
          onClick={onClose}
          className={styles.closeButton}
          SvgIcon={CloseButton}
        />
      </div>
      <UploadForm onSubmit={onClose} />
    </Modal>
  );
};
