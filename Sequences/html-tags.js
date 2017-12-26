import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';
// eslint-disable-next-line
import { l, isEmpty, head, tail, cons as consList, toString as listToString } from 'hexlet-pairs-data';

// BEGIN
export const make = () => l();
export const append = (dom, element) => consList(element, dom);

export const node = (tag, content) => cons(tag, content);

export const name = element => car(element);
export const value = element => cdr(element);

export const toString = (dom) => {
  if (isEmpty(dom)) {
    return '';
  }
  const element = head(dom);
  const tag = name(element);
  return `${toString(tail(dom))}<${tag}>${value(element)}</${tag}>`;
};
// END
export const toString1 = (dom) => {
    if (isEmpty(dom)) {
      return '';
    }
  const nameTag = name(head(dom));
  const valueTag = value(head(dom));
  const str = `<${nameTag}>${valueTag}</${nameTag}>`;
  return toString(tail(dom)) + str;
  };