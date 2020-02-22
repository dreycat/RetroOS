import React from 'react';

import { ReactComponent as SquareIcon } from './images/square.svg';
import styles from './FullScreen.module.css';

const toggleFullscreen = () => {
  try {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const FullScreen = () => (
  <div className={styles.main} onClick={toggleFullscreen}>
    <SquareIcon width={16} height={16} />
  </div>
);

export default FullScreen;
