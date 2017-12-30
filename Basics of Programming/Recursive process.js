// BEGIN (write your solution here)
const sequenceSum = (begin, end) => {
  if (begin > end) {
    return NaN;
  }
  if (begin === end) {
    return begin;
  }
  return begin + sequenceSum(begin + 1, end);
};
  // END
