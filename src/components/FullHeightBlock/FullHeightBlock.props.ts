import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type FullHeightBlockProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  childsCenter?: boolean;
};
