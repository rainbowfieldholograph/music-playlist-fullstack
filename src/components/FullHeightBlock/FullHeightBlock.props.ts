import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FullHeightBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  childsCenter?: boolean;
}
