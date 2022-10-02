import type { ComponentPropsWithoutRef } from 'react';

export type PlayerMusicImageProps = Omit<
  ComponentPropsWithoutRef<'div'>,
  'children'
>;
