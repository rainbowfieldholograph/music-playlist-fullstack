import { useEffect, useState } from 'react';
import { ReactComponent as UpIcon } from 'assets/up-icon.svg';
import { ButtonIcon } from 'components/UIKit';
import styles from './BackToTopButton.module.scss';
import type { FC } from 'react';

const SHOW_BUTTON_DISTANCE = 800;

const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

export const BackToTopButton: FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const scrollHandler = () => {
    if (window.scrollY > SHOW_BUTTON_DISTANCE) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => removeEventListener('scroll', scrollHandler);
  }, []);

  if (!showButton) return null;

  return (
    <ButtonIcon
      title="Scroll to top"
      aria-label="Scroll to top"
      svgIcon={UpIcon}
      className={styles.button}
      onClick={scrollUp}
    />
  );
};
