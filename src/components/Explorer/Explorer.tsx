import { useCallback, useContext, useMemo, useState } from 'react';

import { File } from './File';
import { Directory } from './Directory';
import { fileSystem } from './fs/fileSystem';
import { FileRoute } from './fs/FileRoute';
import { Meta } from './fs/types';
import { getChildren, getNode, isDir } from './fs/utils';
import { FileLinksContext } from '../../contexts/FileLinksProvider';
import { useWindow } from '../../hooks/useWindow';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as UpIcon } from './icons/up.svg';
import styles from './Explorer.module.css';

const route = new FileRoute(fileSystem);

type Mapper = { [key: string]: () => void };

export const Explorer = () => {
  const [path, setPath] = useState(route.path);
  const node = getNode(fileSystem, path);
  const { onOpen: openTodo } = useWindow('todo');
  const { onOpen: openMines } = useWindow('mines');
  const { onOpen: openConsole } = useWindow('console');
  const { onOpen: openNotepad } = useWindow('notepad');
  const { onOpen: openDungeon } = useWindow('dungeon');
  const { onOpen: openSettings } = useWindow('settings');
  const { onOpen: openAudioplayer } = useWindow('audioplayer');
  const { onOpen: openScreensaver } = useWindow('screensaver');
  const { onOpen: openVideoPlayer } = useWindow('videoplayer');
  const { onOpen: openImageViewer } = useWindow('imageviewer');
  const { dispatch: setFileLink } = useContext(FileLinksContext);

  const mapper: Mapper = useMemo(() => {
    return {
      todo: openTodo,
      mines: openMines,
      dungeon: openDungeon,
      settings: openSettings,
      console: openConsole,
      player: openAudioplayer,
      kernel: openScreensaver,
      videoplayer: openScreensaver,
    };
  }, [openScreensaver, openAudioplayer, openDungeon, openMines, openSettings, openTodo, openConsole]);

  const openDirectory = useCallback((name: string) => {
    route.move(name);
    setPath(route.path);
  }, []);

  const openApp = useCallback(
    (name: string, { extension, link }: Meta) => {
      if (extension === 'bin') {
        mapper[name]?.();
      }
      if (extension === 'text') {
        openNotepad();
      }
      if (extension === 'video' && link) {
        setFileLink({ type: 'set', payload: { name: 'videoplayer', link } });
        openVideoPlayer();
      }
      if (extension === 'image' && link) {
        setFileLink({ type: 'set', payload: { name: 'imageviewer', link } });
        openImageViewer();
      }
    },
    [mapper, openNotepad, openVideoPlayer, openImageViewer, setFileLink]
  );

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
        {getChildren(node).map((children) => {
          return isDir(children) ? (
            <Directory key={children.id} openDirectory={openDirectory} name={children.name} />
          ) : (
            <File openApp={openApp} key={children.id} name={children.name} meta={children.meta} />
          );
        })}
      </ul>
    </div>
  );
};
