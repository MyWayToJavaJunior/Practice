// @flow

import 'source-map-support/register';

import { isPair, car, cdr, cons } from 'hexlet-pairs';
import * as data from 'hexlet-pairs-data';

/**
 * Make a list of nodes
 * @example
 * make(node('span', 'hello'), node('span', 'world'));
 */
export const make = () => data.l();

/**
 * Append node to a list of nodes
 * @example
 * const dom = make();
 * append(dom, node('h2', 'hello, world'));
 *
 */
export const append = (dom, element) => data.cons(element, dom);

/**
 * Make a node
 * @example
 * node('h2', 'hello, world');
 * node('div', l(node('p', 'one'), node('p', 'two')));
 */
export const node = (tag, mix = data.l()) => cons(tag, mix);

/**
 * Get node's name
 * @example
 * name(node('p', 'hello, world')); // p
 */
export const name = element => car(element);

/**
 * Get node's value
 * @example
 * value(node('p', 'hello, world')); // hello, world
 */
export const value = element => cdr(element);

/**
 * Check if node is tag
 * @example
 * is('h3', node('h3', 'hexlet')); // true
 * is('h3', node('h6', 'hexlet')); // false
 */
export const is = (tagName: string, element) => tagName === name(element);

/**
 * Check if node has children
 * @example
 * hasChildren(node('h3', 'hexlet')); // false
 * hasChildren(node('div', l(node('p', 'wow')))); // true
 */
export const hasChildren = element => isPair(cdr(element));

/**
 * Get node's children
 * @example
 * const children = l(node('p', 'wow'), node('p', 'hey');
 * children(node('div', children)); // [('p', 'wow'), ('p', 'hey')]
 */
export const children = element => cdr(element);

/**
 * Add child to node
 * @example
 * const node = node('div');
 * addChild(node, node('p', 'html tags'));
 */
export const addChild = (element, child) =>
  data.cons(name(element), data.cons(child, children(element)));

/**
 * Convert list of nodes to string
 * @example
 * const tags = make(node('p', 'text'), node('p', 'text2'));
 * toString(tags); // <p>text</p><p>text2</p>
 */
export const toString = (elements) => {
  if (data.isEmpty(elements)) {
    return '';
  }
  const element = data.head(elements);
  const tag = name(element);
  const body = hasChildren(element) ? toString(children(element)) : value(element);
  return `${toString(data.tail(elements))}<${tag}>${body}</${tag}>`;
};

/**
 * Map a list of nodes
 * @example
 * map(element => {
 *   if (is('h2', element)) {
 *     return node('h3', value(element));
 *   }
 *   return element;
 * }, dom);
 */
export const map = (func, elements) => data.map(func, elements);

/**
 * Filter a list of nodes
 * @example
 * filter(element => is('h2', element), dom);
 */
export const filter = (func, elements) => data.filter(func, elements);

/**
 * Reduce a list of nodes
 * @example
 * reduce((element, acc) => acc + 1, 0, dom);
 */
export const reduce = (func, init, elements) => data.reduce(func, init, elements);
