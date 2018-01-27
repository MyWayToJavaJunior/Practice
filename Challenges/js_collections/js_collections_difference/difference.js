// BEGIN
export default (array1, array2) => {
  const set = new Set(array2);
  return array1.filter(value => !set.has(value));
};
// END
export const difference1 = (arr1, arr2) => arr1.filter(value => !arr2.includes(value));
