import React, { useEffect, useRef, useState } from 'react';
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

const Clock = () => {
  const [time, setTime] = useState(getTime);
  const [isOpen, setOpen] = useState(false);
  const popupEl = useRef<HTMLDivElement>(null);
  const clockEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

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
      <span className={styles.clock} ref={clockEl} onClick={() => setOpen(!isOpen)}>
        {time}
      </span>
      <Popup isOpen={isOpen} popupEl={popupEl} />
    </>
  );
};
export default Clock;
