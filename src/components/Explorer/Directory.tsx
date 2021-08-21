import type { FC } from 'react';

import { ReactComponent as Icon } from './icons/folder.svg';
import styles from './Explorer.module.css';

interface DirectoryProps {
  name: string;
  openDirectory: (name: string) => void;
}

export const Directory: FC<DirectoryProps> = ({ name, openDirectory }) => (
  <li>
    <button className={styles.directory} onClick={() => openDirectory(name)}>
      <Icon width={42} height={42} />
      <span className={styles.name} title={name}>
        {name}
      </span>
    </button>
  </li>
);
