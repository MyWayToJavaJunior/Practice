// BEGIN (write your solution here)
import { cons, car, cdr } from 'hexlet-pairs';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);
export const numer = pair => car(pair);
export const denom = pair => cdr(pair);
export const toString = pair => `${numer(pair)} / ${denom(pair)}`;
export const isEqual = (pair1, pair2) => {
  const result = (numer(pair1) * denom(pair2)) === (numer(pair2) * denom(pair1));
  return result;
};
export const add = (pair1, pair2) => {
  const numerpair3 = (numer(pair1) * denom(pair2)) + (numer(pair2) * denom(pair1));
  const denompair3 = denom(pair2) * denom(pair1);
  return make(numerpair3, denompair3);
};
export const sub = (num1, num2) => {
  const point1 = (numer(num1) * denom(num2)) - (denom(num1) * numer(num2));
  return make(point1, (denom(num1) * denom(num2)));
};
export const mul = (num1, num2) => make((numer(num1) * numer(num2)), (denom(num1) * denom(num2)));
export const div = (num1, num2) => make((numer(num1) * denom(num2)), (denom(num1) * numer(num2)));
// END
export const make1 = (numer1, denom1) => cons(numer1, denom1);
export const numer1 = pair => car(pair);
export const denom1 = pair => cdr(pair);

export const add1 = (x, y) =>
  make((numer(x) * denom(y)) + (numer(y) * denom(x)), denom(x) * denom(y));

export const sub1 = (x, y) =>
  make((numer(x) * denom(y)) - (numer(y) * denom(x)), denom(x) * denom(y));

export const isEqual1 = (x, y) =>
  numer(x) * denom(y) === numer(y) * denom(x);

export const mul1 = (x, y) =>
  make(numer(x) * numer(y), denom(x) * denom(y));

export const div1 = (x, y) =>
  make(numer(x) * denom(y), denom(x) * numer(y));

export const toString1 = rat => `${numer(rat)} / ${denom(rat)}`;
