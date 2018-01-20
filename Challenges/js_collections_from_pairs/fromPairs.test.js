import fromPairs from './fromPairs';

test('solution', () => {
  const result1 = fromPairs([['fred', 30], ['barney', 40]]);
  expect(result1).toEqual({ fred: 30, barney: 40 });

  const result2 = fromPairs([['cat', 5], ['dog', 6], ['bird', 10]]);
  expect(result2).toEqual({ cat: 5, dog: 6, bird: 10 });
});
