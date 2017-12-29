import { l, isEmpty, reverse, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// console.log(`list ${listToString(list)}`);
// console.log(`elements ${listToString(elements)}`);
// console.log(`check ${listToString(check)}`);
const flatten = (list) => {
  const func = (element, acc) => {
    if (isList(element)) {
      if (isEmpty(element)) {
        return acc;
      }
      return func(tail(element), cons(head(element), acc));
    }
    return cons(element, acc);
  };
  return reverse(reduce(func, l(), list));
};
export default flatten;
