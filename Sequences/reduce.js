import { isEmpty, head, tail } from 'hexlet-pairs-data';
import { value, is } from 'hexlet-html-tags';

// BEGIN
export const reduce = (func, acc, elements) => {
  if (isEmpty(elements)) {
    return acc;
  }
  return reduce(func, func(head(elements), acc), tail(elements));
};
export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const func = (element, acc) => (predicate(element) ? acc + 1 : acc);
  return reduce(func, 0, elements);
};
// END
