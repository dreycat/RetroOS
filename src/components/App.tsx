import React, { FC } from 'react';

import Desktop from './Desktop';
import WindowsProvider from '../contexts/WindowsProvider';
import setTheme from '../utils/setTheme';

const App: FC = () => {
  setTheme();
  return (
    <WindowsProvider>
      <Desktop />
    </WindowsProvider>
  );
};

export default App;
