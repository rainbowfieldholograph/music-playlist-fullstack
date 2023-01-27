import type { ChangeEventHandler, CSSProperties } from 'react';

export type SearchInputProps = {
  className?: string;
  style?: CSSProperties;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
};
