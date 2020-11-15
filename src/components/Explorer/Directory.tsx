import React, { FC } from 'react';

import { ReactComponent as Icon } from './icons/folder.svg';
import styles from './Explorer.module.css';

interface IProps {
  name: string;
  openDirectory: (name: string) => void;
}

const Directory: FC<IProps> = ({ name, openDirectory }) => (
  <li className={styles.directory} onClick={() => openDirectory(name)}>
    <Icon width={42} height={42} />
    <span className={styles.name} title={name}>
      {name}
    </span>
  </li>
);

export default Directory;
