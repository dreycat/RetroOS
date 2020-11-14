import React, { FC, useRef, useCallback, useEffect, useMemo } from 'react';

import { useConsole } from '../../hooks/useConsole';
import { useWindow } from '../../hooks/useWindow';
import { IWindowSize } from '../../interfaces';
import styles from './Console.module.css';

interface IProps {
  size: IWindowSize;
}

type Mapper = { [key: string]: () => void };

const Console: FC<IProps> = ({ size }) => {
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
    ({ key, currentTarget }: React.KeyboardEvent<HTMLInputElement>) => {
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
