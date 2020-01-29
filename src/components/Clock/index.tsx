import React, { useEffect, useState } from 'react';

import styles from './Clock.module.css';

const conf = {
  weekday: 'short',
  day: 'numeric',
  month: 'short'
};

const getTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${date.toLocaleDateString('en-US', conf)} ${hours}:${(minutes < 10 ? '0' : '') + minutes}`;
};

const Clock = () => {
  const [time, setTime] = useState(getTime);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(getTime());
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return <span className={styles.main}>{time}</span>;
};
export default Clock;
