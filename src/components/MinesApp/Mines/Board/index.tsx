import React, { FC } from 'react';

import Cell from '../Cell';
import styles from './Board.module.css';

import { Field } from '../types';

interface IProps {
  size: number;
  field: Field;
  handleLeftClick?: (x: number, y: number) => void;
  handleRightClick?: (x: number, y: number) => void;
}

const Board: FC<IProps> = ({ size, field, handleLeftClick, handleRightClick }) => (
  <ul className={styles.main} style={{ width: size * 32 }}>
    {field.map((row, y) =>
      row.map((cell, x) => (
        <Cell
          value={cell}
          x={x}
          y={y}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
          key={x + y}
        />
      ))
    )}
  </ul>
);

export default Board;
