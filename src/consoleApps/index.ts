import cowsay from './cowsay';
import error from './error';
import version from './version';

const apps = {
  cowsay,
  version,
  default: error
};

export default apps;
