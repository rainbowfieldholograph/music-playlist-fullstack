import { memo, useState } from 'react';
import { Button } from 'components/UIKit';
import { UploadModal } from '../UploadModal';
import type { FC } from 'react';

export const AddNewTrack: FC = memo(() => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => setModal(false);
  const openModal = () => setModal(true);

  return (
    <>
      <Button onClick={openModal}>Add new track</Button>
      <UploadModal isOpen={modal} onClose={closeModal} />
    </>
  );
});

AddNewTrack.displayName = 'AddNewTrack';
