import Explorer from '../Explorer';
import { Application } from '../Application';
import { ReactComponent as Icon } from './icons/ComputerIcon.svg';
import { shortcutPositions, windowPositions } from './positions';

export const ExplorerApp = () => (
  <Application
    name="explorer"
    label="My Computer"
    icon={<Icon width={40} height={40} />}
    defaultShortcutPosition={shortcutPositions.explorer}
    defaultWindowPosition={windowPositions.explorer}
  >
    <Explorer />
  </Application>
);
