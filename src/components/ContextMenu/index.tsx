import React, { useState, useCallback, useEffect, useRef } from 'react';

import styles from './ContextMenu.module.css';

const SHIFT_MENU = 4;

const ContextMenu = () => {
  const [coords, setCoords] = useState();
  const [isOpen, setOpen] = useState(false);
  const menuEl = useRef<HTMLUListElement>(null);

  const contextHandler = useCallback((event: React.MouseEvent) => {
    event.preventDefault();
    setCoords({ x: event.clientX - SHIFT_MENU, y: event.clientY - SHIFT_MENU });
    setOpen(true);
  }, []);

  const onClickOutsideHandler = useCallback(
    event => {
      if (isOpen && !menuEl.current!.contains(event.target)) {
        setOpen(false);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    window.addEventListener('click', onClickOutsideHandler);
    return () => {
      window.removeEventListener('click', onClickOutsideHandler);
    };
  }, [onClickOutsideHandler]);

  return (
    <>
      <div className={styles.background} onContextMenu={contextHandler} />
      {isOpen && (
        <ul className={styles.menu} style={{ top: coords.y, left: coords.x }} ref={menuEl}>
          <li className={styles.item}>Упорядочить значки</li>
          <li className={styles.item}>Перезагрузить</li>
        </ul>
      )}
    </>
  );
};

export default ContextMenu;
