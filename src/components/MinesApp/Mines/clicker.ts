import { Field } from './types';
import { Cell } from './enums';
import deepClone from '../../../utils/deepClone';

import getNeighbors from './getNeighbors';

export default (userField: Field, field: Field, y: number, x: number): Field => {
  const cloneUserField: Field = deepClone(userField);
  cloneUserField[y][x] = Cell.Open;

  const opener = (y: number, x: number) => {
    getNeighbors(cloneUserField, y, x).forEach(neighbor => {
      const cell = neighbor.value;
      if (cell !== Cell.Flag && cell !== Cell.Open && cell === Cell.Suspense) {
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
