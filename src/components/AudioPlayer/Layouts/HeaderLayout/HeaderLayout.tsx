import type { FC, ReactNode } from 'react';

import styles from './HeaderLayout.module.css';

interface IProps {
  controlls: ReactNode;
  screen: ReactNode;
  marquee: ReactNode;
  volumeControl: ReactNode;
  progress: ReactNode;
}

export const HeaderLayout: FC<IProps> = ({ controlls, screen, marquee, volumeControl, progress }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.screen}>{screen}</div>
      <div>
        {marquee}
        <div className={styles.volume}>{volumeControl}</div>
      </div>
    </div>
    <div className={styles.controlls}>{controlls}</div>
    {progress}
  </div>
);
