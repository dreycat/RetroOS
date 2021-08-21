import type { FC } from 'react';

import styles from './FirstScreen.module.css';

interface FirstScreenProps {
  handleClick: (width: number, height: number, mines: number) => void;
  sellSize: number;
}

export const FirstScreen: FC<FirstScreenProps> = ({ handleClick, sellSize }) => (
  <div className={styles.main}>
    <button className={styles.button} onClick={() => handleClick(8, 8, 10)}>
      8:8
      <span className={styles.mines}>10 mines</span>
    </button>
    <button className={styles.button} onClick={() => handleClick(16, 16, 40)}>
      16:16
      <span className={styles.mines}>40 mines</span>
    </button>
    <button className={styles.button} onClick={() => handleClick(30, 16, 99)}>
      30:16
      <span className={styles.mines}>99 mines</span>
    </button>
    <button
      className={styles.button}
      onClick={() => {
        const fieldWidth = Math.floor(window.innerWidth / sellSize) - 3;
        const fieldHeight = Math.floor(window.innerHeight / sellSize) - 3;
        const mines = Math.floor((fieldHeight * fieldWidth) / 5);
        handleClick(fieldWidth, fieldHeight, mines);
      }}
    >
      Ultimate
    </button>
  </div>
);
