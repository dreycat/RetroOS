import cowsay from './cowsay';
import error from './error';
import release from './release';
import date from './date';
import help from './help';
import reset from './reset';

const consoleApps = {
  cowsay,
  release,
  date,
  help,
  reset,
  default: error
};

export default consoleApps;
