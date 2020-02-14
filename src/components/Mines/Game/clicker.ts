import getNeighbors from './getNeighbors';
import deepClone from '../../../utils/deepClone';

import { Field } from './types';
import { Cell } from './enums';

export default (userField: Field, field: Field, x: number, y: number): Field => {
  const cloneUserField: Field = deepClone(userField);
  cloneUserField[y][x] = Cell.Open;

  const opener = (x: number, y: number) => {
    getNeighbors(cloneUserField, x, y).forEach(neighbor => {
      const cell = neighbor.value;
      if (cell !== Cell.Flag && cell !== Cell.Open && cell === Cell.Suspense) {
        cloneUserField[neighbor.y][neighbor.x] = Cell.Open;
        if (field[neighbor.y][neighbor.x] === 0) {
          opener(neighbor.x, neighbor.y);
        }
      }
    });
  };

  if (field[y][x] === 0) {
    opener(x, y);
  }

  return cloneUserField;
};
