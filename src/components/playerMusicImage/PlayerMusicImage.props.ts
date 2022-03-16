import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PlayerMusicImageProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'children'
  > {}
