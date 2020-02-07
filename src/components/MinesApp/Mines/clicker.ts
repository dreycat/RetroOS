import { Field } from './types';
import { Cell } from './enums';
import deepClone from '../../../utils/deepClone';

const getСell = (field: Field, y: number, x: number) => {
  return field[y] && typeof field[y][x] === 'number' ? { y, x } : null;
};

type Coord = {
  x: number;
  y: number;
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
  ].filter(cell => cell !== null) as Coord[];
};

export default (userField: Field, field: Field, y: number, x: number): Field => {
  const clone: Field = deepClone(userField);
  clone[y][x] = Cell.Open;

  if (field[y][x] === 0) {
    getNeighbors(field, y, x).forEach(({ y, x }) => {
      clone[y][x] = Cell.Open;
    });
  }

  return clone;
};
