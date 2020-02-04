import React from 'react';

import Application from '../Application';
import ToDo from './ToDo';
import isMobile from '../../utils/isMobile';
import { ReactComponent as Icon } from './images/icon.svg';

const ToDoApp = () => {
  const defaultIconPosition = isMobile() ? { top: 241, left: 27 } : { top: 286, left: 73 };
  const defaultWindowPosition = isMobile() ? { top: 117, left: 97 } : { top: 167, left: 818 };

  return (
    <Application
      name="ToDo"
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
      icon={<Icon width={46} height={46} />}
    >
      <ToDo />
    </Application>
  );
};

export default ToDoApp;
