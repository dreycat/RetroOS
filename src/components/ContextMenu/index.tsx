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

  const contextHandler = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setCoords({ x: event.clientX - SHIFT_MENU, y: event.clientY - SHIFT_MENU });
    setOpen(true);
  }, []);

  useEffect(() => {
    const closeMenu = () => {
      if (!isOpen) return;
      setOpen(false);
    };
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
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
        >
          <li className={styles.item} onClick={openSettings}>
            Settings
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
