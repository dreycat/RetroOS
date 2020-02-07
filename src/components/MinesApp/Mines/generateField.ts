import compose from '../../../utils/compose';

import { Field, Row } from './types';
import deepClone from '../../../utils/deepClone';
import random from '../../../utils/random';
import { Cell } from './enums';

const getEmptyField = (length: number, fill: number | string) => (): Field =>
  Array.from({ length }, () => Array(length).fill(fill));

const setMines = (mines: number) => (field: Field) => {
  field = deepClone(field);
  const set = (field: Field, mines: number): Field => {
    if (!mines) return field;
    const y = random(field.length);
    const x = random(field.length);
    if (field[y][x] !== Cell.Mine) {
      field[y][x] = Cell.Mine;
      mines -= 1;
    }
    return set(field, mines);
  };
  return set(field, mines);
};

const getСell = (field: Field, y: number, x: number) => {
  return field[y] && field[y][x] !== undefined ? field[y][x] : null;
};

const countMines = (neighbors: Row) => {
  return neighbors.reduce((accum: number, curr: string | number) => {
    return curr === Cell.Mine ? accum + 1 : accum;
  }, 0);
};

const getNeighbors = (field: Field, y: number, x: number) => {
  return [
    getСell(field, y, x + 1),
    getСell(field, y, x - 1),
    getСell(field, y - 1, x + 1),
    getСell(field, y - 1, x),
    getСell(field, y - 1, x - 1),
    getСell(field, y + 1, x + 1),
    getСell(field, y + 1, x),
    getСell(field, y + 1, x - 1)
  ].filter(cell => cell !== null) as (string | number)[];
};

const calc = (field: Field) => {
  field = deepClone(field);
  for (let y = 0; y < field.length; y++) {
    for (let x = 0; x < field.length; x++) {
      if (field[y][x] !== Cell.Mine) {
        field[y][x] = countMines(getNeighbors(field, y, x));
      }
    }
  }
  return field;
};

export { getEmptyField };
export default (size: number, mines: number): (() => Field) => compose(calc, setMines(mines), getEmptyField(size, 0));
