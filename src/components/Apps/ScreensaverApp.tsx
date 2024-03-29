import { useCallback, useEffect } from 'react';

import { Screensaver } from '../Screensaver';
import { useWindow } from '../../hooks/useWindow';
import { ApplicationErrorBoundary } from '../ApplicationErrorBoundary';

export const ScreensaverApp = () => {
  const { isOpen, onClose } = useWindow('screensaver');

  const escHandler = useCallback(
    ({ code }: KeyboardEvent) => {
      if (code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escHandler, false);
    return () => {
      document.removeEventListener('keydown', escHandler, false);
    };
  }, [escHandler]);

  const onClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return isOpen ? (
    <ApplicationErrorBoundary>
      <Screensaver onClick={onClick} />
    </ApplicationErrorBoundary>
  ) : null;
};
