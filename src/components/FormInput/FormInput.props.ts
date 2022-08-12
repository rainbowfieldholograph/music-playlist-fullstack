import type { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type FormInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  inputState: string;
  setInputState: (value: string) => void;
  labelText: string;
};
