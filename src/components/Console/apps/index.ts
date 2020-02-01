import cowsay from './cowsay';
import error from './error';
import version from './version';
import date from './date';
import help from './help';

const apps = {
  cowsay,
  version,
  date,
  help,
  default: error
};

export default apps;
