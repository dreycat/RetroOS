import { useEffect, useRef } from 'react';
import type { FC } from 'react';

import { architect } from './matrix';
import styles from './Screensaver.module.css';

interface ScreensaverProps {
  onClick: () => void;
}

export const Screensaver: FC<ScreensaverProps> = ({ onClick }) => {
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
