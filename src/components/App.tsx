import React, { FC } from 'react';

import Desktop from './Desktop';
import OpenerProvider from '../contexts/OpenerProvider';

const App: FC = () => {
  return (
    <OpenerProvider>
      <Desktop />
    </OpenerProvider>
  );
};

export default App;
