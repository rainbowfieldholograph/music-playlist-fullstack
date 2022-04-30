import { FC, useState } from 'react';
import { Button } from '../Button';
import { UploadModal } from '../UploadModal';

export const AddNewTrack: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  return (
    <>
      <Button onClick={openModal}>Add new track</Button>
      <UploadModal isOpen={modal} onClose={closeModal} />
    </>
  );
};
