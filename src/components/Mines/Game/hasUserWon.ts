import { Cell } from './enums';
import type { Field } from './types';

export const hasUserWon = (field: Field, mines: number) => {
  const undiscoveredСells = field
    .flat()
    .reduce((accum: number, cell) => (cell === Cell.Suspense || cell === Cell.Flag ? accum + 1 : accum), 0);
  return undiscoveredСells === mines;
};
