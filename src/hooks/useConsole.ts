import { useState, useCallback } from 'react';

import apps from '../consoleApps';

interface IMessage {
  text: string;
}

type Command = keyof typeof apps;

export default () => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const dispatch = useCallback(
    (command: Command, arg: string, raw: string) => {
      const app = apps[command] || apps.default;
      const text = app(arg);
      setMessages([...messages, { text: `root > ${raw}` }, { text }]);
    },
    [messages]
  );

  return {
    messages,
    dispatch
  };
};
