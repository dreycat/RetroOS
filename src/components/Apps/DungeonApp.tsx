import React from 'react';

import Dungeon from '../Dungeon';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/DungeonIcon.svg';

const defaultIconPosition = isMobile() ? { top: 150, left: 48 } : { top: 637, left: 76 };
const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 300 } : { top: 70, left: 175 };

const DungeonApp = () => (
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

export default DungeonApp;
