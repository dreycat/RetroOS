import React, { FC, useRef, useCallback, useEffect } from 'react';

import { useConsole } from '../../hooks/useConsole';
import { useWindow } from '../../hooks/useWindow';
import { IWindowSize } from '../../interfaces';
import styles from './Console.module.css';

interface IProps {
  size: IWindowSize;
}

const Console: FC<IProps> = ({ size }) => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { messages, dispatch } = useConsole();
  const { onOpen: openScreensaver } = useWindow('screensaver');

  const handleKeyPress = useCallback(
    ({ key, currentTarget }: React.KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') {
        const raw = currentTarget.value;
        const line = raw.trim();
        if (line === '') return;
        if (line === 'matrix') {
          openScreensaver();
        }
        const [command, ...arg] = line.split(' ');
        dispatch(command, arg.join(' '), raw);
        currentTarget.value = '';
      }
    },
    [dispatch, openScreensaver]
  );

  const handleClick = useCallback(() => {
    inputEl.current?.focus();
  }, []);

  useEffect(() => {
    inputEl.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={`${styles.main} border`} onClick={handleClick} style={{ height: size.height, width: size.width }}>
      <ul className={styles.list}>
        {messages.map(({ text }, id) => (
          <li className={styles.item} key={id}>
            <pre className={styles.pre}>{text}</pre>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <input className={styles.input} type="text" onKeyPress={handleKeyPress} ref={inputEl} autoFocus />
      </div>
    </div>
  );
};

export default Console;
