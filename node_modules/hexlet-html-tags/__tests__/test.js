import { make,
  append,
  reduce,
  addChild,
  toString,
  filter,
  map,
  is,
  value,
  node } from '..';

describe('dom', () => {
  let dom;

  beforeAll(() => {
    const dom1 = make();
    const dom2 = append(dom1, node('h2', 'hello, world'));
    const ul = node('ul');
    const ul2 = addChild(ul, node('li', 'body'));
    const ul3 = addChild(ul2, node('li', 'another body'));

    const dom3 = append(dom2, ul3);
    dom = append(dom3, node('h2', 'header2'));
  });

  it('#toString', () => {
    const p = node('p', 'paragraph');
    const ul = node('ul');
    const ul2 = addChild(ul, node('li', 'body'));
    const ul3 = addChild(ul2, node('li', 'another body'));
    const dom1 = make();
    const dom2 = append(dom1, p);
    const dom3 = append(dom2, ul3);

    const result = '<p>paragraph</p><ul><li>body</li><li>another body</li></ul>';
    expect(toString(dom3)).toBe(result);
  });

  it('#map', () => {
    const processedDom = map((element) => {
      if (is('h2', element)) {
        return node('h3', value(element));
      }
      return element;
    }, dom);

    const result = '<h3>hello, world</h3><ul><li>body</li><li>another body</li></ul><h3>header2</h3>';
    expect(toString(processedDom)).toBe(result);
  });

  it('#filter', () => {
    const processedDom = filter(element => is('h2', element), dom);

    const result = '<h2>hello, world</h2><h2>header2</h2>';
    expect(toString(processedDom)).toBe(result);
  });

  it('#reduce', () => {
    const count = reduce((element, acc) => acc + 1, 0, dom);

    expect(count).toBe(3);
  });
});
