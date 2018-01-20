// BEGIN
export default (array, ...rest) => {
  const set = new Set(rest);
  return array.filter(value => !set.has(value));
};
// END
