import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputFileProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'width' | 'height'
> & {
  text: string;
};
