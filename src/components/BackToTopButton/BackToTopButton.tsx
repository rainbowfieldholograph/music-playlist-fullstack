import { useEffect, useState } from 'react';
import { ButtonIcon } from '../ButtonIcon';
import { ReactComponent as UpIcon } from '../../img/up-icon.svg';
import styles from './BackToTopButton.module.css';
import { BackToTopButtonProps } from './BackToTopButton.props';

const SHOW_BUTTON_DISTANCE = 800;

export const BackToTopButton = ({}: BackToTopButtonProps): JSX.Element | null => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollHandler = () => {
    if (window.scrollY > SHOW_BUTTON_DISTANCE) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => removeEventListener('scroll', scrollHandler);
  }, []);

  if (!showButton) return null;

  return (
    <ButtonIcon
      title="Scroll to top"
      aria-label="Scroll to top"
      SvgIcon={UpIcon}
      className={styles.button}
      onClick={scrollUp}
    />
  );
};
