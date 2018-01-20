import compact from './compact';

test('solution', () => {
  const result = compact([]);
  expect(result).toEqual([]);

  const result2 = compact([0, 1, false, 2, '', 3]);
  expect(result2).toEqual([1, 2, 3]);

  const result3 = compact([undefined, 'undefined', null, true, Infinity]);
  expect(result3).toEqual(['undefined', true, Infinity]);

  const result4 = compact(['now', NaN]);
  expect(result4).toEqual(['now']);
});
