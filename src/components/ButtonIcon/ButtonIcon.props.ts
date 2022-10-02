import type { ComponentPropsWithoutRef, FC, SVGProps } from 'react';

type SvgComponent = FC<
  SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type ButtonIconProps = Omit<
  ComponentPropsWithoutRef<'button'>,
  'children'
> & {
  SvgIcon: SvgComponent;
};
