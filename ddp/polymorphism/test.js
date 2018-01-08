import { l, toString } from 'hexlet-pairs-data'; // eslint-disable-line
import { make } from './tags';
import extract from './extract';

test('extract 1', () => {
  expect(extract(l())).toBe(l());
  const tags1 = l(
    make('a', { href: '/about' }),
    make('img', { src: '/avatar.jpeg' }),
    make('link', { href: '/favicon.ico' }),
  );
  const expected1 = l('/about', '/avatar.jpeg', '/favicon.ico');
  expect(toString(extract(tags1))).toBe(toString(expected1));

  const tags2 = l(
    make('img', { src: '/he.jpg' }),
    make('a', { href: '/about' }),
    make('img', { src: '/she.jpg' }),
  );
  const expected2 = l('/he.jpg', '/about', '/she.jpg');
  expect(toString(extract(tags2))).toBe(toString(expected2));
});
