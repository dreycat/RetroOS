import React, { useCallback, useState } from 'react';

import File from './File';
import Directory from './Directory';
import fileSystem from './fs/fileSystem';
import { FileRoute } from './fs/FileRoute';
import { getChildrens, getNode, isDir } from './fs/utils';
import { ReactComponent as UpIcon } from './icons/up.svg';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import styles from './Explorer.module.css';

const route = new FileRoute(fileSystem);

const Explorer = () => {
  const [path, setPath] = useState(route.path);
  const node = getNode(fileSystem, path);

  const openDirectory = useCallback((name: string) => {
    route.move(name);
    setPath(route.path);
  }, []);

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
          <HomeIcon width={16} height={16} />
        </button>
        <button
          className={styles.button}
          onClick={() => {
            route.up();
            setPath(route.path);
          }}
        >
          <UpIcon width={16} height={16} />
        </button>
        <div className={styles.path}>
          <span>{'/' + path.join('/')}</span>
        </div>
      </div>
      <ul className={styles.fileList}>
        {getChildrens(node).map((children) => {
          return isDir(children) ? (
            <Directory key={children.id} openDirectory={openDirectory} name={children.name} />
          ) : (
            <File key={children.id} name={children.name} extension={children.meta.extension || 'unknown'} />
          );
        })}
      </ul>
    </div>
  );
};

export default Explorer;
