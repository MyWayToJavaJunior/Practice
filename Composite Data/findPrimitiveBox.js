// BEGIN (write your solution here)
const findPrimitiveBox = (pair) => {
    if (isPair(car(pair)) === false && isPair(cdr(pair)) === false) {
      return pair;
    }
    if (isPair(car(pair)) === false) {
       return findPrimitiveBox(cdr(pair));
    }
    if (isPair(cdr(pair)) === false) {
       return findPrimitiveBox(car(pair));
    }
  };
  
  // END