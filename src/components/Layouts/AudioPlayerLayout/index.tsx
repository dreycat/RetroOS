import React, { FC } from 'react';

import styles from './AudioPlayerLayout.module.css';

interface IProps {
  controlls: React.ReactNode;
  screen: React.ReactNode;
  marquee: React.ReactNode;
  volumeControl: React.ReactNode;
  progress: React.ReactNode;
}

const AudioPlayerLayout: FC<IProps> = ({ controlls, screen, marquee, volumeControl, progress }) => (
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

export default AudioPlayerLayout;
