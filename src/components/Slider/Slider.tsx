import clsx from 'clsx';
import styles from './Slider.module.scss';
import type { FC } from 'react';
import type { SliderProps } from './Slider.props';

export const Slider: FC<SliderProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.slider, className)} type="range" {...rest} />;
};
