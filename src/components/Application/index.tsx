import React, { FC } from 'react';

import Icon from '../Icon';
import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

import { Coords } from '../../interfaces/coords';

interface IProps {
  name: string;
  icon: React.ReactNode;
  defaultWindowPosition: Coords;
  defaultIconPosition: Coords;
}

const Application: FC<IProps> = ({ name, icon, defaultWindowPosition, defaultIconPosition, children }) => {
  const { isOpen, handleOpen, onClose } = useWindow(name);
  const { storeIconCoords, saveIconPosition } = useIcon(name, defaultIconPosition);

  return (
    <>
      <Window isOpen={isOpen} name={name} onClose={onClose} defaultPosition={defaultWindowPosition}>
        {children}
      </Window>
      <Icon
        name={name}
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={handleOpen}
        saveIconPosition={saveIconPosition}
      >
        {icon}
      </Icon>
    </>
  );
};

export default Application;
