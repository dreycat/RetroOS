import React from 'react';

import Mines from '../Mines';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/MinesIcon.svg';

const defaultIconPosition = isMobile() ? { top: 356, left: 57 } : { top: 522, left: 83 };
const defaultWindowPosition = { top: 47, left: 54 };

const MinesApp = () => (
  <Application
    name="mines"
    label="Mines"
    defaultIconPosition={defaultIconPosition}
    defaultWindowPosition={defaultWindowPosition}
    icon={<Icon height={36} width={36} />}
  >
    <Mines />
  </Application>
);

export default MinesApp;
