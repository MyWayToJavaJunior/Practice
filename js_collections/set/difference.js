// BEGIN
export default (set1, set2) =>
  new Set(Array.from(set1).filter(value => !set2.has(value)));
// END
