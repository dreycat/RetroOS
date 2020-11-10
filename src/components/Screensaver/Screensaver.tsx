import React, { FC, useEffect, useRef } from 'react';

import { architect } from './matrix';
import styles from './Screensaver.module.css';

interface IProps {
  onClick: () => void;
}

const Screensaver: FC<IProps> = ({ onClick }) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    const clear = architect(canvas.current);
    return () => {
      clear();
    };
  }, []);

  return (
    <canvas
      ref={canvas}
      className={styles.screensaver}
      onClick={onClick}
      onContextMenu={(event) => event.preventDefault()}
    />
  );
};

export default Screensaver;
