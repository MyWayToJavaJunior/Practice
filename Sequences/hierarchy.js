import { l, cons as consList, concat } from 'hexlet-pairs-data';
import { is, hasChildren, children, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
const select = (tagName, dom) => {
  const func = (element, acc) => {
    const newAcc = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
    const r = is(tagName, element) ? consList(element, newAcc(element, acc)) : newAcc(element, acc);
    return r(element, acc);
  };
  return reduce(func, l(), dom);
};
export default select;
// END
export const select1 = (tagName, html) => reduce((element, acc) => {
  const acc2 = hasChildren(element) ? concat(select(tagName, children(element)), acc) : acc;
  return is(tagName, element) ? consList(element, acc2) : acc2;
}, l(), html);
