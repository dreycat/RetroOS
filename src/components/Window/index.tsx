import React, { FC } from 'react';

import styles from './Window.module.css';

interface IProps {
  title: string;
}

const Window: FC<IProps> = ({ title, children }) => (
  <div className={styles.main}>
    <div className={styles.header}>
      <h2 className={styles.title} draggable="false">
        {title}
      </h2>
      <div className={styles.decor} />
      <button className={styles.close} />
    </div>
    <div className={styles.body}>{children}</div>
  </div>
);

export default Window;
