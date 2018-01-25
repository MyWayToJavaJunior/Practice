import { l, cons, reduce, has, reverse } from 'hexlet-pairs-data';

// BEGIN
export default (list1, list2) => {
  const appendUniq = (base, list) => {
    const r = reduce((value, acc) => (has(acc, value) ? acc : cons(value, acc)), 
    reverse(base), list);
    return reverse(r);
  };
  return appendUniq(appendUniq(l(), list1), list2);
};
// END
export const union = (list1, list2) => {
  const func = (element, acc) => (cons(element, acc));
  const concat = reduce(func, list2, reverse(list1));
  const func2 = (element, acc) => {
    return has(acc, element) ? acc : cons(element, acc);
  }
  return reverse(reduce(func2, l(), concat));
};
