// BEGIN (write your solution here)
const square = n => n * n;
const sumOfSquares = (a, b) => square(a) + square(b);

const squareSumOfSquares = (a, b) => square(sumOfSquares(a, b));
export default squareSumOfSquares;
// END
