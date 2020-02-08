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

const Board: FC<IProps> = ({ fieldWidth, fieldHeight, sellSize, field, handleLeftClick, handleRightClick }) => (
  <ul className={styles.main} style={{ width: fieldWidth * sellSize, height: fieldHeight * sellSize }}>
    {field.map((row, y) =>
      row.map((cell, x) => (
        <Cell
          x={x}
          y={y}
          key={x + y}
          value={cell}
          sellSize={sellSize}
          handleLeftClick={handleLeftClick}
          handleRightClick={handleRightClick}
        />
      ))
    )}
  </ul>
);

export default Board;
