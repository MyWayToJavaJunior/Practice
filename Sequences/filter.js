import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { value, is, map } from 'hexlet-html-tags';

// BEGIN
export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, l());
};
export const quotes = (elements) => {
  const filtered = filter(element => is('blockquote', element), elements);
  const result = map(value, filtered);
  return result;
};
  // END
