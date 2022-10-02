import type { ComponentPropsWithoutRef } from 'react';

export type FormInputProps = ComponentPropsWithoutRef<'input'> & {
  inputState: string;
  setInputState: (value: string) => void;
  labelText: string;
};
