import clicker from '../clicker';
import generateField, { getEmptyField } from '../generateField';

import { Cell } from '../enums';

describe('clicker function:', () => {
  it('should return open field', () => {
    const userField = getEmptyField(4, 2, Cell.Suspense)();
    const field = generateField(4, 2, 0)();
    const result = clicker(userField, field, 0, 0);
    const openCells = result.flat().reduce((accum: number, curr) => (curr === Cell.Open ? accum + 1 : accum), 0);

    expect(result).toHaveLength(2);
    expect(result[0]).toHaveLength(4);
    expect(result[0]).toContain(Cell.Open);
    expect(openCells).toBe(8);
  });
});
