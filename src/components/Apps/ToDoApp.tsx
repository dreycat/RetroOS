import ToDo from '../ToDo';
import { Application } from '../Application';
import { ReactComponent as Icon } from './icons/ToDoIcon.svg';
import { shortcutPositions, windowPositions } from './positions';

export const ToDoApp = () => (
  <Application
    name="todo"
    label="ToDo"
    defaultShortcutPosition={shortcutPositions.todo}
    defaultWindowPosition={windowPositions.todo}
    icon={<Icon width={46} height={46} />}
  >
    <ToDo />
  </Application>
);
