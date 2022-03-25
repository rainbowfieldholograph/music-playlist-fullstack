import { ButtonIconProps } from './ButtonIcon.props';
import styles from './ButtonIcon.module.css';
import clsx from 'clsx';

export const ButtonIcon = ({ SvgIcon, className, ...rest }: ButtonIconProps): JSX.Element => {
  return (
    <button className={clsx(styles.button, className)} {...rest}>
      <SvgIcon className={styles.icon} />
    </button>
  );
};
