import React, { FC } from 'react';

import Desktop from './Desktop';
import WindowsProvider from '../contexts/WindowsProvider';

const App: FC = () => {
  return (
    <WindowsProvider>
      <Desktop />
    </WindowsProvider>
  );
};

export default App;
