import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type SliderProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'type'
>;
