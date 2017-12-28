import { l, cons as consList, isList, isEmpty, head, tail, concat, toString as listToString } from 'hexlet-pairs-data';
// eslint-disable-next-line
import { is, toString as htmlToString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)

const select = (tagName, dom) => {
  const func = (element, acc) => {
    const newAcc = (element, acc) => hasChildren(element) ? consList(select(tagName, children(element)), acc) : acc;
    const result = (element, acc) => is(tagName, element) ? consList(element, newAcc(element, acc)) : newAcc(element, acc);
   return result(element, acc);
  };
  return reduce(func, l(), dom);
};
export default select;
// END