// BEGIN (write your solution here)
const transform = (n) => {
    return n * Math.PI / 180;
  };
  export default (a, b, c) => {
    return ((a * a) * (1 / 2)) * (Math.sin(transform(b)) * Math.sin(transform(c)) / Math.sin(transform(180) - transform(b + c)));
  };
  // END
  