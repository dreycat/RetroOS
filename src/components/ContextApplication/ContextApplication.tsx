import { FC } from 'react';

import Window from '../Window';
import { ApplicationErrorBoundary } from '../ApplicationErrorBoundary';
import { useWindow } from '../../hooks/useWindow';

interface ContextApplicationProps {
  name: Apps;
  label: string;
  defaultWindowPosition: Position;
}

export const ContextApplication: FC<ContextApplicationProps> = ({ name, label, defaultWindowPosition, children }) => {
  const { isOpen, onClose } = useWindow(name);

  return (
    <Window name={name} label={label} isOpen={isOpen} onClose={onClose} defaultPosition={defaultWindowPosition}>
      <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
    </Window>
  );
};
