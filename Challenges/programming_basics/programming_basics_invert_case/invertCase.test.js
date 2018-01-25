import invertCase from './invertCase';

test('should work', () => {
  expect(invertCase('Hello, World!')).toBe('hELLO, wORLD!');
  expect(invertCase('I loVe JS')).toBe('i LOvE js');
});
