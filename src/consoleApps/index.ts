import cowsay from './cowsay';
import error from './error';
import version from './version';
import date from './date';

const apps = {
  cowsay,
  version,
  date,
  default: error
};

export default apps;
