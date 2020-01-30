import React, { FC } from 'react';

import styles from './Marquee.module.css';

const Marquee: FC = ({ children }) => (
  <div className={`${styles.main} border`}>
    <div className={styles.inner}>
      <p className={styles.text}>{children}</p>
    </div>
  </div>
);

export default Marquee;
