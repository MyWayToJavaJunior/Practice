import { l, toString as listToString } from 'hexlet-pairs-data';
import sort from './sort';

describe('Sort', () => {
  it('set 1', () => {
    const result = sort(l());
    expect(listToString(result)).toBe(listToString(l()));

    const result2 = sort(l(5, -3, 2, 10, 4, 4, 5));
    expect(listToString(result2)).toBe(listToString(l(-3, 2, 4, 4, 5, 5, 10)));

    const result3 = sort(l(3, 3, 0, -1, 0, 4, -5));
    expect(listToString(result3)).toBe(listToString(l(-5, -1, 0, 0, 3, 3, 4)));
  });
});
