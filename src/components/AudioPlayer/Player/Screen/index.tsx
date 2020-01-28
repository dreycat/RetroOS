import React from 'react';

import styles from './Screen.module.css';

const Screen = () => (
  <div className={styles.main}>
    <span className={styles.radio}>radio</span>
    <span className={styles.pause} />
    <span className={styles.play} />
    <span className={styles.prettyTime}>"pretty time"</span>
  </div>
);

export default Screen;
