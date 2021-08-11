import { useRef, useEffect } from 'react';
import type { FC, MouseEvent } from 'react';

import { renderCell } from '../Cell';
import { renderGrid } from './renderGrid';
import { Field } from '../types';
import styles from './Board.module.css';

interface IProps {
  fieldWidth: number;
  fieldHeight: number;
  sellSize: number;
  field: Field;
  zIndex: number;
  handleLeftClick?: (x: number, y: number) => void;
  handleRightClick?: (x: number, y: number) => void;
}

const SCALE = window.devicePixelRatio || 2;

export const Board: FC<IProps> = ({
  fieldWidth,
  fieldHeight,
  sellSize,
  field,
  zIndex,
  handleLeftClick = () => {},
  handleRightClick = () => {},
}) => {
  const canvas = useRef<HTMLCanvasElement>(null);

  const width = fieldWidth * sellSize;
  const height = fieldHeight * sellSize;

  useEffect(() => {
    const ctx = canvas.current?.getContext('2d');
    if (!ctx || !canvas.current) return;

    canvas.current.width = width * SCALE;
    canvas.current.height = height * SCALE;

    ctx.scale(SCALE, SCALE);
    ctx.clearRect(0, 0, width, height);

    field.forEach((row, y) => row.forEach((value, x) => renderCell(ctx, x, y, value, sellSize)));

    renderGrid(ctx, width, height, sellSize);
  }, [canvas, width, height, field, sellSize]);

  const onClick = (event: MouseEvent) => {
    const x = Math.floor(event.nativeEvent.offsetX / sellSize);
    const y = Math.floor(event.nativeEvent.offsetY / sellSize);

    if (event.button === 0) {
      handleLeftClick(x, y);
    } else if (event.button === 2) {
      handleRightClick(x, y);
    }
  };

  return (
    <canvas
      className={styles.main}
      ref={canvas}
      style={{ width, height, zIndex }}
      onClick={onClick}
      onContextMenu={onClick}
    />
  );
};
