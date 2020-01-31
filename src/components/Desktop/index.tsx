import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayer from '../AudioPlayer';
import ContexMenu from '../ContextMenu';
import Console from '../Console';
import styles from './Desktop.module.css';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <AudioPlayer />
    <Console />
    <ContexMenu />
  </div>
);

export default Desktop;
