import { FC } from 'react';
import { Modal } from '../Modal';
import { UploadForm } from '../UploadForm';
import { UploadModalProps } from './UploadModal.props';
import styles from './UploadModal.module.scss';

export const UploadModal: FC<UploadModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal className={styles.uploadModal} open={isOpen} onClose={onClose}>
      <UploadForm onSubmit={onClose} />
    </Modal>
  );
};
