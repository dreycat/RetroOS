import Dungeon from '../Dungeon';
import { Application } from '../Application';
import { ReactComponent as Icon } from './icons/DungeonIcon.svg';
import { shortcutPositions, windowPositions } from './positions';

export const DungeonApp = () => (
  <Application
    name="dungeon"
    label="Dungeon"
    icon={<Icon width={36} height={36} />}
    defaultShortcutPosition={shortcutPositions.dungeon}
    defaultWindowPosition={windowPositions.dungeon}
  >
    <Dungeon />
  </Application>
);
