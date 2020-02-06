import React, { FC } from 'react';

import Cell from '../Cell';
import styles from './Board.module.css';

import { Field } from '../types';

interface IProps {
  field: Field;
  handleClick?: (x: number, y: number, ctx: boolean) => void;
}

const Board: FC<IProps> = ({ field, handleClick }) => (
  <ul className={styles.main}>
    {field.map((row, y) =>
      row.map((cell, x) => <Cell value={cell} x={x} y={y} handleClick={handleClick} key={`${x + y}`} />)
    )}
  </ul>
);

export default Board;
