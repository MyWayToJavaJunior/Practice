// BEGIN (write your solution here)
const calc = (a, b, c) => {
  switch (a) {
    case '+':
      return b + c;
    case '-':
      return b - c;
    case '*':
      return b * c;
    case '/':
      return b / c;
    default:
      return NaN;
  }
};
export default calc;
// END
