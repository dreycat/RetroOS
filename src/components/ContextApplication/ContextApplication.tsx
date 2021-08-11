import { FC } from 'react';

import Window from '../Window';
import { ApplicationErrorBoundary } from '../ApplicationErrorBoundary';
import { useWindow } from '../../hooks/useWindow';
import { ICoords } from '../../interfaces';
import { Apps } from '../../types';

interface IProps {
  name: Apps;
  label: string;
  defaultWindowPosition: ICoords;
}

export const ContextApplication: FC<IProps> = ({ name, label, defaultWindowPosition, children }) => {
  const { isOpen, onClose } = useWindow(name);

  return (
    <Window name={name} label={label} isOpen={isOpen} onClose={onClose} defaultPosition={defaultWindowPosition}>
      <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
    </Window>
  );
};
