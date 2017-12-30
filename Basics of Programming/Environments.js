// BEGIN
const bigLettersCount = (str) => {
let result = 0;
for (let i = 0; i < length(str); i += 1) {
  if (toUpperCase(str[i]) === str[i]) {
    result += 1;
  }
}
return result;
// END
// BEGIN
const compare = (first, second) => {
    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);
if (firstCount > secondCount) {
    return 1;
  } else if (firstCount < secondCount) {
    return -1;
  }
  return 0;
  // END
export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) => (compare(first, second) === 0);
}
}
