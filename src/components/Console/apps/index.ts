import cowsay from './cowsay';
import error from './error';
import release from './release';
import date from './date';
import help from './help';

const apps = {
  cowsay,
  release,
  date,
  help,
  default: error
};

export default apps;
