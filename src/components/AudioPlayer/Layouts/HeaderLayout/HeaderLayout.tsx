import type { FC, ReactNode } from 'react';

import styles from './HeaderLayout.module.css';

interface HeaderLayoutProps {
  controls: ReactNode;
  screen: ReactNode;
  marquee: ReactNode;
  volumeControl: ReactNode;
  progress: ReactNode;
}

export const HeaderLayout: FC<HeaderLayoutProps> = ({ controls, screen, marquee, volumeControl, progress }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div className={styles.screen}>{screen}</div>
      <div>
        {marquee}
        <div className={styles.volume}>{volumeControl}</div>
      </div>
    </div>
    <div className={styles.controls}>{controls}</div>
    {progress}
  </div>
);
