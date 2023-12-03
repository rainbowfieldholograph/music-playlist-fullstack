import type { ReactNode } from 'react';

export type ModalProps = {
  className?: string;
  isOpened: boolean;
  onClose: () => void;
  children: ReactNode;
};
