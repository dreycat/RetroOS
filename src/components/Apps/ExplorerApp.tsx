import React from 'react';

import Application from '../Application';
import Explorer from '../Explorer';
import { ReactComponent as Icon } from './icons/ComputerIcon.svg';

const ExplorerApp = () => {
  const defaultIconPosition = { top: 67, left: 200 };
  const defaultWindowPosition = { top: 70, left: 175 };

  return (
    <Application
      name="explorer"
      label="Explorer"
      icon={<Icon width={40} height={40} />}
      defaultIconPosition={defaultIconPosition}
      defaultWindowPosition={defaultWindowPosition}
    >
      <Explorer />
    </Application>
  );
};

export default ExplorerApp;
