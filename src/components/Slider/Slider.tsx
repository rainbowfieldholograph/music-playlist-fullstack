import clsx from 'clsx';
import { SliderProps } from './Slider.props';
import styles from './Slider.module.css';

export const Slider = ({ className, ...rest }: SliderProps): JSX.Element => {
  return <input className={clsx(styles.slider, className)} type="range" {...rest} />;
};
