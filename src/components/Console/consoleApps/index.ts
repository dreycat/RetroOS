import cowsay from './cowsay';
import error from './error';
import release from './release';
import date from './date';
import help from './help';
import reset from './reset';
import matrix from './matrix';

const consoleApps = {
  cowsay,
  release,
  date,
  help,
  reset,
  matrix,
  default: error,
};

export default consoleApps;
