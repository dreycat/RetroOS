import React, { FC } from 'react';

import styles from './PlayerLayout.module.css';

interface IProps {
  controlls: React.ReactNode;
  screen: React.ReactNode;
  marquee: React.ReactNode;
  volumeControl: React.ReactNode;
}

const PlayerLayout: FC<IProps> = ({ controlls, screen, marquee, volumeControl }) => (
  <div className={styles.main}>
    <div>
      {screen}
      {controlls}
    </div>
    <div>
      {marquee}
      {volumeControl}
    </div>
  </div>
);

export default PlayerLayout;
