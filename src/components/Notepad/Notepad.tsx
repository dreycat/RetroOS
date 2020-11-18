import React from 'react';

import Author from './Author';
import styles from './Notepad.module.css';

const Notepad = () => {
  return (
    <div className={styles.main}>
      <Author />
    </div>
  );
};

export default Notepad;
