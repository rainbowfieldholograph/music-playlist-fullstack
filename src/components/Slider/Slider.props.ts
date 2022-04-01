import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface SliderProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  > {}
