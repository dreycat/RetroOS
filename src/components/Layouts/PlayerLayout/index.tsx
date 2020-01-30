import React, { FC } from 'react';

import styles from './PlayerLayout.module.css';

interface IProps {
  controlls: React.ReactNode;
  screen: React.ReactNode;
  marquee: React.ReactNode;
  volumeControl: React.ReactNode;
  progress: React.ReactNode;
}

const PlayerLayout: FC<IProps> = ({ controlls, screen, marquee, volumeControl, progress }) => (
  <div className={styles.main}>
    <div className={styles.row}>
      <div>
        {screen}
        {controlls}
      </div>
      <div>
        {marquee}
        {volumeControl}
      </div>
    </div>
    {progress}
  </div>
);

export default PlayerLayout;
