import { cowsay } from './cowsay';
import { error } from './error';
import { release } from './release';
import { date } from './date';
import { help } from './help';
import { reset } from './reset';
import { matrix } from './matrix';
import { emptyLine } from './emptyLine';

export const consoleApps = {
  cowsay,
  release,
  date,
  help,
  reset,
  screensaver: matrix,
  player: emptyLine,
  dungeon: emptyLine,
  mines: emptyLine,
  settings: emptyLine,
  todo: emptyLine,
  default: error,
};
