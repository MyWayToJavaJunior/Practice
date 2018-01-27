import { l, cons, reduce, has, reverse } from 'hexlet-pairs-data';

export default (list1, list2) => {
  const func = (element, acc) => (cons(element, acc));
  const concat = reduce(func, list2, reverse(list1));
  const func2 = (element, acc) => {
    if (has(acc, element)) {
      return acc;
    }
    return cons(element, acc);
  };
  return reverse(reduce(func2, l(), concat));
};
