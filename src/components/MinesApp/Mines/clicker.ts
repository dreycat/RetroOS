import { Field } from './types';
import { Cell } from './enums';
import deepClone from '../../../utils/deepClone';

type Coord = {
  x: number;
  y: number;
};

const getСell = (field: Field, y: number, x: number) => {
  return field[y] && field[y][x] !== undefined ? { y, x } : null;
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
  const cloneUserField: Field = deepClone(userField);
  cloneUserField[y][x] = Cell.Open;

  const opener = (y: number, x: number) => {
    const neighbors = getNeighbors(cloneUserField, y, x);
    neighbors.forEach(neighbor => {
      const value = cloneUserField[neighbor.y][neighbor.x];
      if (value !== Cell.Flag && value !== Cell.Open && value === Cell.Suspense) {
        cloneUserField[neighbor.y][neighbor.x] = Cell.Open;
        if (field[neighbor.y][neighbor.x] === 0) {
          opener(neighbor.y, neighbor.x);
        }
      }
    });
  };

  if (field[y][x] === 0) {
    opener(y, x);
  }

  return cloneUserField;
};
