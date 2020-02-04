import React, { FC, useState, useCallback, useEffect, useRef } from 'react';
import { v4 as uuid } from 'uuid';

import getStarogeData from '../../../utils/getStarogeData';
import styles from './ToDo.module.css';
import { ReactComponent as DeleteIcon } from '../images/delete.svg';
import { ReactComponent as DoneIcon } from '../images/done.svg';
import { ReactComponent as NotDoneIcon } from '../images/not_done.svg';

type ListItem = {
  id: string;
  text: string;
  done: boolean;
};

interface IProps {
  size: {
    height: number;
    width: number;
  };
}

const ToDo: FC<IProps> = ({ size }) => {
  const [list, setList] = useState<ListItem[]>(getStarogeData('todos', []));
  const [text, setText] = useState('');
  const listEl = useRef<HTMLUListElement>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      const str = text.trim();
      if (!str) return;
      setList([...list, { id: uuid(), text: str, done: false }]);
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
    idx => {
      setList(list.filter(({ id }) => id !== idx));
    },
    [list]
  );

  const handleToggle = useCallback(
    idx => {
      setList(list.map(item => (item.id === idx ? { ...item, done: !item.done } : item)));
    },
    [list]
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list));
  }, [list]);

  return (
    <div className={`${styles.main} border`} style={{ height: size.height, width: size.width }}>
      <ul className={styles.list} ref={listEl}>
        {list.map(({ id, text, done }) => (
          <li className={done ? `${styles.item} ${styles.done}` : styles.item} key={id}>
            <button className={styles.toggle} onClick={() => handleToggle(id)}>
              {done ? <DoneIcon width={20} height={20} /> : <NotDoneIcon width={20} height={20} />}
            </button>
            <p className={styles.text}>{text}</p>
            <button className={styles.delete} onClick={() => handleDelete(id)}>
              <DeleteIcon width={16} height={16} />
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default ToDo;
