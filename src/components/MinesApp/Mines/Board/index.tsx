import React, { FC } from 'react';

import Cell from '../Cell';
import styles from './Board.module.css';

import { Field } from '../types';

interface IProps {
  fieldWidth: number;
  fieldHeight: number;
  sellSize: number;
  field: Field;
  handleLeftClick?: (x: number, y: number) => void;
  handleRightClick?: (x: number, y: number) => void;
}

const Board: FC<IProps> = ({
  fieldWidth,
  fieldHeight,
  sellSize,
  field,
  handleLeftClick = () => {},
  handleRightClick = () => {}
}) => {
  const onClick = (event: React.MouseEvent) => {
    // @ts-ignore
    const cell = event.nativeEvent.target?.closest('li');
    console.dir(event.nativeEvent.target);
    if (!cell || !cell.dataset.x || !cell.dataset.y) {
      return;
    }
    const x = parseInt(cell.dataset.x, 10);
    const y = parseInt(cell.dataset.y, 10);
    if (event.button === 0) {
      handleLeftClick(x, y);
    } else if (event.button === 2) {
      handleRightClick(x, y);
    }
  };

  return (
    <ul
      className={styles.main}
      style={{ width: fieldWidth * sellSize, height: fieldHeight * sellSize }}
      onClick={onClick}
      onContextMenu={onClick}
    >
      {field.map((row, y) => row.map((cell, x) => <Cell x={x} y={y} key={x + y} value={cell} sellSize={sellSize} />))}
    </ul>
  );
};

export default Board;
