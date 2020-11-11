import { useState, useCallback } from 'react';

import consoleApps from '../components/Console/consoleApps';

type ConsoleApps = keyof typeof consoleApps;

interface IMessage {
  text: string;
}

const userPrefix = 'root >';

export const useConsole = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const dispatch = useCallback(
    (command: string, arg: string, raw: string) => {
      if (command === 'clear' || command === 'cls') {
        setMessages([]);
        return;
      }
      const app = consoleApps[command as ConsoleApps] || consoleApps.default;
      const text = app(arg);
      setMessages([...messages, { text: `${userPrefix} ${raw}` }, { text }]);
    },
    [messages]
  );

  return {
    messages,
    dispatch,
  };
};
