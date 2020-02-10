import React from 'react';

import Application from '../Application';
import FirstScreen from './FirstScreen';
import isMobile from '../../utils/isMobile';

import { ReactComponent as Icon } from './images/icon.svg';

const MinesApp = () => {
  const defaultIconPosition = isMobile() ? { top: 354, left: 32 } : { top: 412, left: 75 };
  const defaultWindowPosition = { top: 47, left: 54 };

  return (
    <Application
      name="Mines"
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
      icon={<Icon height={36} width={36} />}
    >
      <FirstScreen />
    </Application>
  );
};

export default MinesApp;
