import getNeighbors from '../getNeighbors';
import { getEmptyField } from '../generateField';

describe('getNeighbors function:', () => {
  it('must return the neighbors', () => {
    const field = getEmptyField(4, 4, 'mine')();
    const neighbors = getNeighbors(field, 0, 0);

    const values = neighbors.map(item => item.value);
    const coords = neighbors.flatMap(item => [item.x, item.y]);

    expect(neighbors).toHaveLength(3);
    expect(coords).toHaveLength(6);
    expect(values.every(item => item === 'mine')).toBe(true);
    expect(coords.every(item => typeof item === 'number' && item < 2)).toBe(true);
  });
});
