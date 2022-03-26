import { ChangeEventHandler } from 'react';

export interface SearchInputProps {
  className?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}
