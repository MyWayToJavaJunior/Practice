// BEGIN (write your solution here)
const square = (n) => {
  return n * n;
};
const sumOfSquares = (a, b) => {
  return square(a) + square(b);
};
const squareSumOfSquares = (a, b) => {
  return square(sumOfSquares(a, b));
};
// END