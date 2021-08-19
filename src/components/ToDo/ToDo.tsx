import { useState, useCallback, useEffect, useRef } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import { nanoid } from 'nanoid';

import { getStorageData } from '../../utils/getStorageData';
import { ReactComponent as DeleteIcon } from './images/delete.svg';
import { ReactComponent as DoneIcon } from './images/done.svg';
import { ReactComponent as NotDoneIcon } from './images/not_done.svg';
import styles from './ToDo.module.css';

type ListItem = {
  id: string;
  text: string;
  done: boolean;
};

export const ToDo = () => {
  const [list, setList] = useState<ListItem[]>(() => getStorageData('todos', []));
  const [text, setText] = useState('');
  const listEl = useRef<HTMLUListElement>(null);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const str = text.trim();
      if (!str) return;
      setList([...list, { id: nanoid(), text: str, done: false }]);
      setText('');
      setTimeout(() => {
        if (listEl.current) {
          listEl.current.scrollTop = listEl.current.scrollHeight;
        }
      }, 0);
    },
    [list, text]
  );

  const handleDelete = useCallback(
    (idx) => {
      setList(list.filter(({ id }) => id !== idx));
    },
    [list]
  );

  const handleToggle = useCallback(
    (idx) => {
      setList(list.map((item) => (item.id === idx ? { ...item, done: !item.done } : item)));
    },
    [list]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  return (
    <div className={`${styles.main} border`}>
      <ul className={styles.list} ref={listEl}>
        {list.map(({ id, text, done }) => (
          <li className={done ? `${styles.item} ${styles.done}` : styles.item} key={id}>
            <button className={styles.toggle} onClick={() => handleToggle(id)} aria-label="task switch">
              {done ? <DoneIcon width={20} height={20} /> : <NotDoneIcon width={20} height={20} />}
            </button>
            <p className={styles.text}>{text}</p>
            <button className={styles.delete} onClick={() => handleDelete(id)} aria-label="delete task">
              <DeleteIcon width={16} height={16} />
            </button>
          </li>
        ))}
      </ul>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.line} />
        <label htmlFor="todo-input" className="visuallyhidden">
          Enter your task
        </label>
        <input
          id="todo-input"
          className={styles.input}
          autoFocus
          type="text"
          value={text}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
          }}
        />
      </form>
    </div>
  );
};
