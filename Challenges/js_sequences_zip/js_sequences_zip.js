import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';

// BEGIN
const zip = (list1, list2) => {
  const iter = (first, last, acc) => {
    if (isEmpty(first) || isEmpty(last)) {
      return acc;
    }
    const newAcc = cons(l(head(first), head(last)), acc);
    return iter(tail(first), tail(last), newAcc);
  };
  return reverse(iter(list1, list2, l()));
};
export default zip;
// END
export const zip1 = (list1, list2) => {
  if (isEmpty(list1) || isEmpty(list2)) {
    return l();
  }
  const iter = (l1, l2, acc) => {
    if (isEmpty(l1) || isEmpty(l2)) {
      return reverse(acc);
    }
    return iter(tail(l1), tail(l2), cons(l(head(l1), head(l2)), acc));
  };
  return iter(list1, list2, l());
};
