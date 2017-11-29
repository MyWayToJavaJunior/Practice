// BEGIN (write your solution here)
export const make = (numer, denom) => make => make(numer, denom);
export const numer = z => z((x, y) => x);
export const denom = z => z((x, y) => y);
export const toString = (z) => {
  return `${numer(z)} / ${denom(z)}`;
};
export const isEqual = (num1, num2) => {
  return (numer(num1)%numer(num2) === 0 || numer(num2)%numer(num1) === 0) && (denom(num1)%denom(num2) === 0 || denom(num2)%denom(num1) === 0);
};
export const add = (num1, num2) => {
  return make(((numer(num1) * denom(num2)) + (denom(num1) * numer(num2))), (denom(num1) * denom(num2))); 
};
export const sub = (num1, num2) => {
  return make(((numer(num1) * denom(num2)) - (denom(num1) * numer(num2))), (denom(num1) * denom(num2))); 
};
export const mul = (num1, num2) => {
  return make((numer(num1) * numer(num2)), (denom(num1) * denom(num2))); 
};
export const div = (num1, num2) => {
  return make((numer(num1) * denom(num2)), (denom(num1) * numer(num2)));
};
// END
export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);

export const add = (x, y) =>
  make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y));

export const sub = (x, y) =>
  make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y));

export const isEqual = (x, y) =>
  numer(x) * denom(y) === numer(y) * denom(x);

export const mul = (x, y) =>
  make(numer(x) * numer(y), denom(x) * denom(y));

export const div = (x, y) =>
  make(numer(x) * denom(y), denom(x) * numer(y));

export const toString = rat => `${numer(rat)} / ${denom(rat)}`;
