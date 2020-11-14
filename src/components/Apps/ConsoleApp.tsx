import React from 'react';

import Application from '../Application';
import Console from '../Console';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/ConsoleIcon.svg';

const ConsoleApp = () => {
  const defaultIconPosition = isMobile() ? { top: 142, left: 21 } : { top: 180, left: 69 };
  const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 300 } : { top: 70, left: 175 };
  const size = isMobile() ? { height: 200, width: 300 } : { height: 312, width: 500 };

  return (
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
};

export default ConsoleApp;
