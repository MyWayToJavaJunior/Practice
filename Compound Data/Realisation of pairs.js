// BEGIN
export const car = z => z((x, y) => x);
export const cdr = z => z((x, y) => y);
// END

export const cons = (x, y) => m => m(x, y);

// BEGIN (write your solution here)
const getX = (x, y) => x;
const getY = (x, y) => y;
export const pair = cons(getX, getY);
export const car1 = par => par(getX);
export const cdr1 = par => par(getY);
// END
