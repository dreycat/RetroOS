import { getEmptyField, generateField } from '../generateField';

import { Cell } from '../enums';

describe('generateField function:', () => {
  it('should return minefield', () => {
    const field = generateField(4, 6, 10)();
    const mines = field.flat().reduce((accum: number, curr) => (curr === Cell.Mine ? accum + 1 : accum), 0);

    expect(field).toHaveLength(6);
    expect(field[0]).toHaveLength(4);
    expect(mines).toBe(10);
  });
});

describe('getEmptyField function:', () => {
  it('should return empty field', () => {
    const field = getEmptyField(4, 2, 0)();

    expect(field).toHaveLength(2);
    expect(field[0]).toHaveLength(4);
    expect(field[0]).toContain(0);
    expect(field[0].every((item) => item === 0)).toBe(true);
  });
});
