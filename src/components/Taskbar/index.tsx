import React from 'react';

import Clock from '../Clock';
import styles from './Taskbar.module.css';

const Taskbar = () => (
  <div className={styles.main}>
    <Clock />
  </div>
);

export default Taskbar;
