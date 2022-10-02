import type { ComponentPropsWithoutRef } from 'react';

export type InputFileProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'width' | 'height'
> & {
  text: string;
};
