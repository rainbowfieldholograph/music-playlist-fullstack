import type { ComponentPropsWithoutRef } from 'react';

export type SliderProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'>;
