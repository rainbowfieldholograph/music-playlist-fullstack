import type { ComponentPropsWithoutRef } from 'react';

export type FullHeightBlockProps = ComponentPropsWithoutRef<'div'> & {
  childsCenter?: boolean;
};
