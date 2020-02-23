import React, { FC } from 'react';

import Desktop from './Desktop';
import WindowsProvider from '../contexts/WindowsProvider';
import { initTheme } from '../utils/themes';

const App: FC = () => {
  initTheme();
  return (
    <WindowsProvider>
      <Desktop />
    </WindowsProvider>
  );
};

export default App;
