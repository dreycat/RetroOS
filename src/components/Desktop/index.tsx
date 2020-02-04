import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayerApp from '../AudioPlayerApp';
import ConsoleApp from '../ConsoleApp';
import ToDoApp from '../ToDoApp';
import ContexMenu from '../ContextMenu';
import styles from './Desktop.module.css';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <AudioPlayerApp />
    <ConsoleApp />
    <ToDoApp />
    <ContexMenu />
  </div>
);

export default Desktop;
