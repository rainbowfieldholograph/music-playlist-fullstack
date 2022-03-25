import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface InputFileProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'width' | 'height'
  > {
  text: string;
}
