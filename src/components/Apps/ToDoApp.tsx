import React from 'react';

import ToDo from '../ToDo';
import Application from '../Application';
import { isMobile } from '../../utils/isMobile';
import { ReactComponent as Icon } from './icons/ToDoIcon.svg';

const size = isMobile() ? { height: 292, width: 275 } : { height: 360, width: 460 };
const defaultIconPosition = isMobile() ? { top: 249, left: 52 } : { top: 400, left: 80 };
const defaultWindowPosition = isMobile() ? { top: 117, left: 97 } : { top: 167, left: 818 };

const ToDoApp = () => (
  <Application
    name="todo"
    label="ToDo"
    defaultIconPosition={defaultIconPosition}
    defaultWindowPosition={defaultWindowPosition}
    icon={<Icon width={46} height={46} />}
  >
    <ToDo size={size} />
  </Application>
);

export default ToDoApp;
