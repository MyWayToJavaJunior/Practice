import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const make = () => l();
export const node = (name, value) => cons(name, value);
export const name = node => car(node);
export const value = node => cdr(node);
export const append = (dom, element) => consList(element, dom);
// END