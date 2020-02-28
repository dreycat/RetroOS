import React from 'react';

import Application from '../Application';
import Dungeon from '../Dungeon';
import isMobile from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/DungeonIcon.svg';

const DungeonApp = () => {
  const defaultIconPosition = isMobile() ? { top: 457, left: 23 } : { top: 527, left: 64 };
  const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 300 } : { top: 70, left: 175 };

  return (
    <Application
      name="dungeon"
      label="Dungeon"
      icon={<Icon width={36} height={36} />}
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
    >
      <Dungeon />
    </Application>
  );
};

export default DungeonApp;
