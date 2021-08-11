import { Mines } from '../Mines';
import { Application } from '../Application';
import { ReactComponent as Icon } from './icons/MinesIcon.svg';
import { shortcutPositions, windowPositions } from './positions';

export const MinesApp = () => (
  <Application
    name="mines"
    label="Mines"
    defaultShortcutPosition={shortcutPositions.mines}
    defaultWindowPosition={windowPositions.mines}
    icon={<Icon height={36} width={36} />}
  >
    <Mines />
  </Application>
);
