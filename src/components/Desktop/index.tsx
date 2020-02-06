import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import AudioPlayerApp from '../AudioPlayerApp';
import ConsoleApp from '../ConsoleApp';
import ToDoApp from '../ToDoApp';
import ContexMenu from '../ContextMenu';
import Mines from '../MinesApp';
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
