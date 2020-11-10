import React, { useState } from 'react';

import fileSystem from './fs/fileSystem';
import { FileRoute } from './fs/FileRoute';
import { getChildrens, getNode, isDir } from './fs/utils';
import { ReactComponent as Folder } from './icons/folder.svg';
import { ReactComponent as File } from './icons/file.svg';
import styles from './Explorer.module.css';

const route = new FileRoute(fileSystem);

const Explorer = () => {
  const [path, setPath] = useState(route.path);
  const node = getNode(fileSystem, path);

  return (
    <div className={styles.main}>
      <pre>{'/' + path.join('/')}</pre>
      <button
        onClick={() => {
          route.goHome();
          setPath(route.path);
        }}
      >
        home
      </button>
      <button
        onClick={() => {
          route.up();
          setPath(route.path);
        }}
      >
        up
      </button>
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
                {children.name}
              </li>
            );
          }

          return (
            <li key={children.id}>
              <File width={42} height={42} />
              {children.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Explorer;
