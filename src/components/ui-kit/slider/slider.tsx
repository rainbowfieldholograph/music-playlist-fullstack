import clsx from 'clsx';
import styles from './slider.module.scss';
import type { FC } from 'react';
import type { SliderProps } from './slider.props';

export const Slider: FC<SliderProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.slider, className)} type="range" {...rest} />;
};
