import intersection from './intersection';

describe('Intersection', () => {
  it('should works', () => {
    const result = intersection([], []);
    expect(result).toEqual([]);

    const result2 = intersection([2, 1], [0, 5, 2]);
    expect(result2).toEqual([2]);

    const result3 = intersection([10, 100, 0, 234, 'hello'], [234, 432, 10, 'str', 0]);
    expect(result3).toEqual([10, 0, 234]);
  });
});
