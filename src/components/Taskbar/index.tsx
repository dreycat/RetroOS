import React from 'react';

import Clock from '../Clock';
import FullScreen from '../FullScreen';
import styles from './Taskbar.module.css';

const Taskbar = () => (
  <div className={styles.main} onContextMenu={e => e.preventDefault()}>
    <div className={styles.expander} />
    <Clock />
    <FullScreen />
  </div>
);

export default Taskbar;
