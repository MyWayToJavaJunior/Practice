// BEGIN (write your solution here)
export default (a, b, c, d) => {
  if (a === c && b === d) {
    return 2;
  } else if ((a === b) && (c === d)) {
    return 1;
  } else if (a > b && c > d) {
    return 1;
  } else if (a < b && c < d) {
    return 1;
  }
  return 0;
};
// END
