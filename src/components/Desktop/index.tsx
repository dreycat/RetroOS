import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayerApp from '../Apps/AudioPlayerApp';
import ConsoleApp from '../Apps/ConsoleApp';
import ToDoApp from '../Apps/ToDoApp';
import Mines from '../Apps/MinesApp';
import ContexMenu from '../ContextMenu';
import styles from './Desktop.module.css';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <AudioPlayerApp />
    <ConsoleApp />
    <ToDoApp />
    <Mines />
    <ContexMenu />
  </div>
);

export default Desktop;
