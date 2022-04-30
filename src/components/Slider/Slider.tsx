import clsx from 'clsx';
import { FC } from 'react';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.scss';

export const Slider: FC<SliderProps> = ({ className, ...rest }) => {
  return <input className={clsx(styles.slider, className)} type="range" {...rest} />;
};
