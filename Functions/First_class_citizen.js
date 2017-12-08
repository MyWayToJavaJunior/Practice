// BEGIN
export default (times, fn, value) => {
    const iter = (counter, acc) => {
      if (counter === 0) {
        return acc;
      }
      return iter(counter - 1, fn(acc));
    };
  
    return iter(times, value);
  };
  // END
  // BEGIN (write your solution here)
const apply = (times, f, arg) => {
    if (times === 0) {
      return arg;
    }
    let result = arg;
  
    for (let i = 0; i < times; i += 1) {
     
      result = f(result);
    }
    return result;
  };
  export default apply;
  // END