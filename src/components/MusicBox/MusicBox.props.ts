import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export type PlayerMusicImageProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'children'
>;
