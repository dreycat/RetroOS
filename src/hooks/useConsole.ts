import { useState, useCallback } from 'react';

import apps from '../components/Console/apps';

interface IMessage {
  text: string;
}

const userPrefix = 'root >';

export default () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const dispatch = useCallback(
    (command: string, arg: string, raw: string) => {
      if (command.trim() === '') return;
      if (command === 'clear' || command === 'cls') {
        setMessages([]);
        return;
      }
      // @ts-ignore
      const app = apps[command] || apps.default;
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
