import React, { FC, useRef, useCallback, useEffect } from 'react';

import apps from '../../../consoleApps';
import styles from './Body.module.css';

type Command = keyof typeof apps;

interface Message {
  text: string;
}

interface IProps {
  messages: Message[];
  dispatch: (command: Command, arg: string) => void;
}

const Body: FC<IProps> = ({ messages, dispatch }) => {
  const mainEl = useRef<HTMLDivElement>(null);
  const inputEl = useRef<HTMLInputElement>(null);

  const handleKeyPress = useCallback(
    ({ key, currentTarget }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') {
        const [command, arg] = currentTarget.value.split(' ');
        // @ts-ignore
        dispatch(command, arg);
        currentTarget.value = '';
      }
    },
    [dispatch]
  );

  useEffect(() => {
    inputEl.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleClick = () => {
    inputEl.current?.focus();
  };

  return (
    <div className={`${styles.main} border`} onClick={handleClick} ref={mainEl}>
      <ul className={styles.list}>
        {messages.map(({ text }, id) => (
          <li className={styles.item} key={id}>
            <pre className={styles.pre}>{text}</pre>
          </li>
        ))}
      </ul>
      <input className={styles.input} type="text" onKeyPress={handleKeyPress} ref={inputEl} autoFocus />
    </div>
  );
};

export default Body;
