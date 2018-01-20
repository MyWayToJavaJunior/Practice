import difference from './difference';

describe('Difference', () => {
  it('should works', () => {
    const result1 = difference([2, 1], [2, 3]);
    expect(result1).toEqual([1]);

    const result2 = difference([], [2, 3]);
    expect(result2).toEqual([]);

    const result3 = difference([2, 1], []);
    expect(result3).toEqual([2, 1]);
  });
});

