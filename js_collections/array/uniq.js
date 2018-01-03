// BEGIN (write your solution here)
export default coll => coll.reduce((acc, value) =>
  (acc.includes(value) ? acc : acc.concat(value)), []);
// END
