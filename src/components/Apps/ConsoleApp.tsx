import { Console } from '../Console';
import { Application } from '../Application';
import { shortcutPositions, windowPositions } from './positions';
import { ReactComponent as Icon } from './icons/ConsoleIcon.svg';

export const ConsoleApp = () => (
  <Application
    name="console"
    label="Console"
    icon={<Icon width={36} height={36} />}
    defaultShortcutPosition={shortcutPositions.console}
    defaultWindowPosition={windowPositions.console}
  >
    <Console />
  </Application>
);
