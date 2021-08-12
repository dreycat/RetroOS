import { useEffect, useRef, useState } from 'react';
import Popup from './Popup';

import styles from './Clock.module.css';

const conf: Intl.DateTimeFormatOptions = {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
};

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${date.toLocaleDateString('en-US', conf)} ${hours}:${(minutes < 10 ? '0' : '') + minutes}`;
};

export const Clock = () => {
  const [time, setTime] = useState(getTime);
  const [isOpen, setOpen] = useState(false);
  const popupEl = useRef<HTMLDivElement>(null);
  const clockEl = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const keydownHandler = ({ code }: KeyboardEvent) => {
      if (code === 'Escape' && isOpen) {
        setOpen(false);
      }
    };
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    };
  }, [isOpen]);

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
      if (isOpen && !popupEl.current?.contains(event.target as Node) && event.target !== clockEl.current) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', onClickOutsideHandler);
    return () => {
      window.removeEventListener('mousedown', onClickOutsideHandler);
    };
  }, [isOpen]);

  return (
    <>
      <button className={styles.clock} ref={clockEl} onClick={() => setOpen(!isOpen)}>
        {time}
      </button>
      <Popup isOpen={isOpen} popupEl={popupEl} />
    </>
  );
};
