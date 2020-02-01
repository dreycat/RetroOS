import React from 'react';

import Body from '../Body';
import useConsole from '../../../hooks/useConsole';

const Main = () => {
  const { messages, dispatch } = useConsole();
  return <Body messages={messages} dispatch={dispatch} />;
};

export default Main;
