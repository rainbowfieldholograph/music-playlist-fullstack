import { ReactNode } from 'react';

export interface ModalProps {
  className?: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}
