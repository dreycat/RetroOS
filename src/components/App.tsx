import React, { FC } from 'react';

import Desktop from './Desktop';
import WindowsProvider from '../contexts/WindowsProvider';
import FileLinksProvider from '../contexts/FileLinksProvider';
import { initTheme } from '../utils/themes';

const App: FC = () => {
  initTheme();
  return (
    <WindowsProvider>
      <FileLinksProvider>
        <Desktop />
      </FileLinksProvider>
    </WindowsProvider>
  );
};

export default App;
