// BEGIN (write your solution here)
const objectify = (list, fn) => list.reduce((acc, value) => ({ ...acc, [fn(value)]: value }), {});

export default objectify;
// END
