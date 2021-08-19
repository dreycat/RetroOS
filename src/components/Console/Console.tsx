import { useRef, useCallback, useEffect, useMemo } from 'react';
import type { KeyboardEvent } from 'react';

import { useConsole } from '../../hooks/useConsole';
import { useWindow } from '../../hooks/useWindow';
import styles from './Console.module.css';

type Mapper = { [key: string]: () => void };

export const Console = () => {
  const inputEl = useRef<HTMLInputElement>(null);
  const { messages, dispatch } = useConsole();
  const { onOpen: openTodo } = useWindow('todo');
  const { onOpen: openMines } = useWindow('mines');
  const { onOpen: openDungeon } = useWindow('dungeon');
  const { onOpen: openSettings } = useWindow('settings');
  const { onOpen: openAudioplayer } = useWindow('audioplayer');
  const { onOpen: openScreensaver } = useWindow('screensaver');

  const mapper: Mapper = useMemo(() => {
    return {
      todo: openTodo,
      mines: openMines,
      dungeon: openDungeon,
      settings: openSettings,
      player: openAudioplayer,
      screensaver: openScreensaver,
    };
  }, [openScreensaver, openAudioplayer, openDungeon, openMines, openSettings, openTodo]);

  const handleKeyPress = useCallback(
    ({ key, currentTarget }: KeyboardEvent<HTMLInputElement>) => {
      if (key === 'Enter') {
        const raw = currentTarget.value;
        const line = raw.trim();
        if (line === '') return;
        mapper[line]?.();
        const [command, ...arg] = line.split(' ');
        dispatch(command, arg.join(' '), raw);
        currentTarget.value = '';
      }
    },
    [dispatch, mapper]
  );

  const handleClick = useCallback(() => {
    inputEl.current?.focus();
  }, []);

  useEffect(() => {
    inputEl.current?.scrollIntoView();
  }, [messages]);

  return (
    <div className={`${styles.main} border`} onClick={handleClick}>
      <ul className={styles.list}>
        {messages.map(({ text }, id) => (
          <li className={styles.item} key={id}>
            <pre className={styles.pre}>{text}</pre>
          </li>
        ))}
      </ul>
      <div className={styles.wrapper}>
        <label htmlFor="console-input" className="visuallyhidden">
          Enter the command
        </label>
        <input
          id="console-input"
          className={styles.input}
          type="text"
          onKeyPress={handleKeyPress}
          ref={inputEl}
          autoFocus
        />
      </div>
    </div>
  );
};
