import { Modal } from '../Modal';
import { UploadForm } from '../UploadForm';
import { UploadModalProps } from './UploadModal.props';
import styles from './UploadModal.module.scss';

export const UploadModal = ({ isOpen, onClose }: UploadModalProps): JSX.Element => {
  return (
    <Modal className={styles.uploadModal} open={isOpen} onClose={onClose}>
      <UploadForm onSubmit={onClose} />
    </Modal>
  );
};
