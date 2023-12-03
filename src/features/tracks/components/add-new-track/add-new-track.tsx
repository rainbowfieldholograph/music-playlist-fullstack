import { memo, useCallback, useState } from 'react';
import { ButtonMemo } from 'components/ui-kit';
import { UploadModal } from '../upload-modal';
import type { FC } from 'react';

export const AddNewTrack: FC = memo(() => {
  const [modal, setModal] = useState<boolean>(false);

  const closeModal = () => setModal(false);
  const openModal = useCallback(() => {
    setModal(true);
  }, [setModal]);

  return (
    <>
      <ButtonMemo onClick={openModal}>Add new track</ButtonMemo>
      <UploadModal isOpen={modal} onClose={closeModal} />
    </>
  );
});

AddNewTrack.displayName = 'AddNewTrack';
