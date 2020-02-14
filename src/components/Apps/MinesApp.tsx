import React from 'react';

import Application from '../Application';
import Mines from '../Mines';
import isMobile from '../../utils/isMobile';

import { ReactComponent as Icon } from './icons/MinesIcon.svg';

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
      <Mines />
    </Application>
  );
};

export default MinesApp;
