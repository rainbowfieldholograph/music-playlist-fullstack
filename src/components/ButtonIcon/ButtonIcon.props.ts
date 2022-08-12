import type { DetailedHTMLProps, FC, HTMLAttributes, SVGProps } from 'react';

export type ButtonIconProps = Omit<
  DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'children'
> & {
  SvgIcon: FC<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
