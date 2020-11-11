import { hasUserWon } from '../hasUserWon';
import { getEmptyField } from '../generateField';
import { Cell } from '../enums';

describe('hasUserWon function:', () => {
  const userField = getEmptyField(4, 2, Cell.Suspense)();

  it('victory check', () => {
    expect(hasUserWon(userField, 8)).toBe(true);
  });

  it('should return false', () => {
    expect(hasUserWon(userField, 10)).toBe(false);
  });
});
