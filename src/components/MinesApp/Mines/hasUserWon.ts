import { Field } from './types';
import { Cell } from './enums';

export default (field: Field, mines: number) => {
  const undiscoveredСells = field
    .flat()
    .reduce((accum: number, cell) => (cell === Cell.Suspense ? accum + 1 : accum), 0);
  return undiscoveredСells === mines;
};
