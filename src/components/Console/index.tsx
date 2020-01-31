import React from 'react';

import Icon from '../Icon';
import Window from '../Window';
import useWindow from '../../hooks/useWindow';
import useIcon from '../../hooks/useIcon';

import { ReactComponent as ConsoleIcon } from './images/console.svg';

const Console = () => {
  const { isOpen, handleOpen, onClose, storeWindowCoords, saveWindowPosition } = useWindow(
    { top: 233, left: 652 },
    'console'
  );
  const { storeIconCoords, saveIconPosition } = useIcon({ top: 180, left: 69 }, 'console_icon');
  return (
    <>
      <Window
        isOpen={isOpen}
        title="Console"
        top={storeWindowCoords.top}
        left={storeWindowCoords.left}
        onClose={onClose}
        onSave={saveWindowPosition}
      >
        <span>test</span>
      </Window>
      <Icon
        title="Console"
        top={storeIconCoords.top}
        left={storeIconCoords.left}
        onClick={handleOpen}
        onSave={saveIconPosition}
      >
        <ConsoleIcon width={40} height={40} />
      </Icon>
    </>
  );
};

export default Console;
