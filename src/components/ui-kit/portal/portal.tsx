import { FC, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalProps } from './portal.props';

export const Portal: FC<PortalProps> = ({ children }) => {
  const [container] = useState(() => document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(children, container);
};
