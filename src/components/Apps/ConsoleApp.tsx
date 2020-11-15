import React from 'react';

import Console from '../Console';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/ConsoleIcon.svg';

const size = isMobile() ? { height: 200, width: 300 } : { height: 312, width: 500 };
const defaultIconPosition = isMobile() ? { top: 56, left: 150 } : { top: 287, left: 77 };
const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 300 } : { top: 70, left: 175 };

const ConsoleApp = () => (
  <Application
    name="console"
    label="Console"
    icon={<Icon width={36} height={36} />}
    defaultIconPosition={defaultIconPosition}
    defaultWindowPosition={defaultWindowPosition}
  >
    <Console size={size} />
  </Application>
);

export default ConsoleApp;
