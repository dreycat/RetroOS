import React, { FC } from 'react';

import Taskbar from '../Taskbar';
import Window from '../Window';
import styles from './Desktop.module.css';

const Desktop: FC = () => (
  <div className={styles.main}>
    <Taskbar />
    <Window title="test">test</Window>
  </div>
);

export default Desktop;
