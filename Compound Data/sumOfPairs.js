// BEGIN (write your solution here)
const sumOfPairs = (pair1, pair2) => {
    return cons((car(pair1) + car(pair2)), (cdr(pair1) + cdr(pair2)));
  };
  // END