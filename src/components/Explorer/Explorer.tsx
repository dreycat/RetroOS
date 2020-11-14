import React, { useState } from 'react';

import fileSystem from './fs/fileSystem';
import { FileRoute } from './fs/FileRoute';
import { getChildrens, getNode, isDir } from './fs/utils';
import { ReactComponent as Folder } from './icons/folder.svg';
import { ReactComponent as File } from './icons/file.svg';
import { ReactComponent as Home } from './icons/home.svg';
import { ReactComponent as Up } from './icons/up.svg';
import styles from './Explorer.module.css';

const route = new FileRoute(fileSystem);

const Explorer = () => {
  const [path, setPath] = useState(route.path);
  const node = getNode(fileSystem, path);

  return (
    <div className={styles.main}>
      <div className={styles.navigation}>
        <button
          className={styles.button}
          onClick={() => {
            route.goHome();
            setPath(route.path);
          }}
        >
          <Home width={16} height={16} />
        </button>
        <button
          className={styles.button}
          onClick={() => {
            route.up();
            setPath(route.path);
          }}
        >
          <Up width={16} height={16} />
        </button>
        <div className={styles.path}>
          <span>{'/' + path.join('/')}</span>
        </div>
      </div>
      <ul className={styles.fileList}>
        {getChildrens(node).map((children) => {
          if (isDir(children)) {
            return (
              <li
                key={children.id}
                onClick={() => {
                  route.move(children.name);
                  setPath(route.path);
                }}
              >
                <Folder width={42} height={42} />
                <span className={styles.name} title={children.name}>
                  {children.name}
                </span>
              </li>
            );
          }

          return (
            <li key={children.id}>
              <File width={42} height={42} />
              <span className={styles.name} title={children.name}>
                {children.name}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Explorer;
