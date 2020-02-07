import compose from '../../../utils/compose';

import getNeighbors from './getNeighbors';
import deepClone from '../../../utils/deepClone';
import random from '../../../utils/random';
import { Field, Neighbor } from './types';
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

const countMines = (neighbors: Neighbor[]) => {
  return neighbors.reduce((accum, curr) => {
    return curr.value === Cell.Mine ? accum + 1 : accum;
  }, 0);
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
export default (size: number, mines: number) => compose(calc, setMines(mines), getEmptyField(size, 0));
