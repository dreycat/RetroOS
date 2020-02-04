import React, { FC } from 'react';

import styles from './Marquee.module.css';

interface IProps {
  error: boolean;
}

const Marquee: FC<IProps> = ({ children, error }) => (
  <div className={`${styles.main} border`}>
    <div className={styles.inner}>
      <p className={styles.text}>
        {error ? (
          <span className={styles.error}>We're sorry, but there was an error processing your request.</span>
        ) : (
          children
        )}
      </p>
    </div>
  </div>
);

export default Marquee;
