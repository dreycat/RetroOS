import React, { FC } from 'react';

import Icon from '../Icon';
import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';
import ApplicationErrorBoundary from '../ApplicationErrorBoundary';
import { ICoords } from '../../interfaces';
import { Apps } from '../../types';

interface IProps {
  name: Apps;
  label: string;
  icon: React.ReactNode;
  defaultWindowPosition: ICoords;
  defaultIconPosition: ICoords;
}

const Application: FC<IProps> = ({ name, label, icon, defaultWindowPosition, defaultIconPosition, children }) => {
  const { isOpen, toggle, onClose } = useWindow(name);
  const { storeIconCoords, saveIconPosition } = useIcon(name, defaultIconPosition);

  return (
    <>
      <Window isOpen={isOpen} name={name} label={label} onClose={onClose} defaultPosition={defaultWindowPosition}>
        <ApplicationErrorBoundary>{children}</ApplicationErrorBoundary>
      </Window>
      <Icon
        label={label}
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={toggle}
        saveIconPosition={saveIconPosition}
      >
        {icon}
      </Icon>
    </>
  );
};

export default Application;
