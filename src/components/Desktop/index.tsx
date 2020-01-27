import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayer from '../AudioPlayer';
import ContexMenu from '../ContextMenu';

import styles from './Desktop.module.css';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <AudioPlayer />
    <ContexMenu />
  </div>
);

export default Desktop;
