import type { ReactNode } from 'react';

export type ModalProps = {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};
