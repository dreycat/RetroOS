import React, { FC } from 'react';

import Window from '../Window';
import ApplicationErrorBoundary from '../ApplicationErrorBoundary';
import useWindow from '../../hooks/useWindow';
import { ICoords } from '../../interfaces';
import { Apps } from '../../types';

interface IProps {
  name: Apps;
  defaultWindowPosition: ICoords;
}

const ContextApplication: FC<IProps> = ({ name, defaultWindowPosition, children }) => {
  const { isOpen, onClose } = useWindow(name);

  return (
    <Window name={name} isOpen={isOpen} onClose={onClose} defaultPosition={defaultWindowPosition}>
      <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
    </Window>
  );
};

export default ContextApplication;
