export const Zero = function () {
  return function (x) {
    return x;
  };
};
const Succ = function (n) {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};
export default Succ;
