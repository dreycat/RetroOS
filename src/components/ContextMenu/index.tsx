import React, { useState, useCallback, useEffect, useRef } from 'react';

import useWindow from '../../hooks/useWindow';
import styles from './ContextMenu.module.css';

const SHIFT_MENU = 4;

const reset = () => {
  localStorage.clear();
  window.location.reload();
};

const ContextMenu = () => {
  const [coords, setCoords] = useState();
  const [isOpen, setOpen] = useState(false);
  const menuEl = useRef<HTMLUListElement>(null);
  const { onOpen: openSettings } = useWindow('settings');
  const { onOpen: openConsole } = useWindow('console');

  const contextHandler = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setCoords({ x: event.clientX - SHIFT_MENU, y: event.clientY - SHIFT_MENU });
    setOpen(true);
  }, []);

  useEffect(() => {
    const onClickOutsideHandler = (event: MouseEvent) => {
      if (isOpen && !menuEl.current!.contains(event.target as Node) && event.button === 0) {
        setOpen(false);
      }
    };
    window.addEventListener('mousedown', onClickOutsideHandler);
    return () => {
      window.removeEventListener('mousedown', onClickOutsideHandler);
    };
  }, [isOpen]);

  return (
    <>
      <div className={styles.background} onContextMenu={contextHandler} />
      {isOpen && (
        <ul
          className={styles.menu}
          style={{ top: coords.y, left: coords.x }}
          ref={menuEl}
          onContextMenu={e => e.preventDefault()}
          onClick={() => setOpen(false)}
        >
          <li className={styles.item} onClick={openSettings}>
            Settings
          </li>
          <li className={styles.item} onClick={openConsole}>
            Console
          </li>
          <li className={styles.item} onClick={reset}>
            Reset
          </li>
        </ul>
      )}
    </>
  );
};

export default ContextMenu;
