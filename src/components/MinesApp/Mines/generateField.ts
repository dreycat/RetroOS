import compose from '../../../utils/compose';
import tap from '../../../utils/tap';
import getNeighbors from './getNeighbors';
import deepClone from '../../../utils/deepClone';
import random from '../../../utils/random';
import { Field, Neighbor } from './types';
import { Cell } from './enums';

const getEmptyField = (fieldWidth: number, fieldHeight: number, fill: number | string) => (): Field =>
  Array.from({ length: fieldHeight }, () => Array(fieldWidth).fill(fill));

const setMines = (mines: number) => (field: Field) => {
  field = deepClone(field);
  const set = (field: Field, mines: number): Field => {
    if (!mines) return field;
    const y = random(field.length);
    const x = random(field[0].length);
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
    for (let x = 0; x < field[0].length; x++) {
      if (field[y][x] !== Cell.Mine) {
        field[y][x] = countMines(getNeighbors(field, y, x));
      }
    }
  }
  return field;
};

export { getEmptyField };
export default (fieldWidth: number, fieldHeight: number, mines: number) =>
  compose(
    tap('calc'),
    calc,
    tap('set mines'),
    setMines(mines),
    tap('empty'),
    getEmptyField(fieldWidth, fieldHeight, 0)
  );
