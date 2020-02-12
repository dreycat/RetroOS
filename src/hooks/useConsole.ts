import { useState, useCallback } from 'react';

import apps from '../components/ConsoleApp/apps';

type Apps = keyof typeof apps;

interface IMessage {
  text: string;
}

const userPrefix = 'root >';

export default () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const dispatch = useCallback(
    (command: string, arg: string, raw: string) => {
      if (command === 'clear' || command === 'cls') {
        setMessages([]);
        return;
      }
      const app = apps[command as Apps] || apps.default;
      const text = app(arg);
      setMessages([...messages, { text: `${userPrefix} ${raw}` }, { text }]);
    },
    [messages]
  );

  return {
    messages,
    dispatch
  };
};
