import React from 'react';

import styles from './Controlls.module.css';

const Controlls = () => (
  <div className={styles.controls}>
    <button className={styles.control}>
      <img className="control-icon" src="/icons/previous.svg" alt="prev" />
    </button>
    <button className={styles.control}>
      <img className={styles.controlIcon} src="/icons/play.svg" alt="play" />
    </button>
    <button className={styles.control}>
      <img className={styles.controlIcon} src="/icons/pause.svg" alt="pause" />
    </button>
    <button className={styles.control}>
      <img className={styles.controlIcon} src="/icons/next.svg" alt="next" />
    </button>
  </div>
);

export default Controlls;
