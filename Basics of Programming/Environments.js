// BEGIN
const bigLettersCount = (str) => {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.toUpperCase(str[i]) === str[i]) {
      result += 1;
    }
  }
  return result;
};
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
};
  // END
export const greaterThan = (first, second) => {
  const result = compare(first, second) === 1;
  return result;
};

export const lessThan = (first, second) => {
  const result = compare(first, second) === -1;
  return result;
};

export const isEqual = (first, second) => {
  const result = compare(first, second) === 0;
  return result;
};
