import React from 'react';

import Application from '../Application';
import Main from './Main';
import isMobile from '../../utils/isMobile';

import { ReactComponent as ConsoleIcon } from './images/console.svg';

const Console = () => {
  const defaultIconPosition = isMobile() ? { top: 142, left: 21 } : { top: 180, left: 69 };
  const defaultWindowPosition = isMobile() ? { top: 24, left: window.innerWidth - 300 } : { top: 70, left: 430 };
  const size = isMobile() ? { height: 200, width: 300 } : { height: 312, width: 500 };

  return (
    <Application
      name="Console"
      icon={<ConsoleIcon width={36} height={36} />}
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
    >
      <Main size={size} />
    </Application>
  );
};

export default Console;
