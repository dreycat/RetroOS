import React from 'react';

import Application from '../Application';
import Main from './Main';

import { ReactComponent as ConsoleIcon } from './images/console.svg';

const Console = () => {
  return (
    <Application
      name="Console"
      icon={<ConsoleIcon width={36} height={36} />}
      defaultIconPosition={{ top: 180, left: 69 }}
      defaultWindowPosition={{ top: 70, left: 430 }}
    >
      <Main />
    </Application>
  );
};

export default Console;
