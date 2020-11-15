import React from 'react';

import Explorer from '../Explorer';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/ComputerIcon.svg';

const defaultIconPosition = isMobile() ? { top: 53, left: 30 } : { top: 60, left: 59 };
const defaultWindowPosition = { top: 103, left: 566 };

const ExplorerApp = () => (
  <Application
    name="explorer"
    label="My Computer"
    icon={<Icon width={40} height={40} />}
    defaultIconPosition={defaultIconPosition}
    defaultWindowPosition={defaultWindowPosition}
  >
    <Explorer />
  </Application>
);

export default ExplorerApp;
