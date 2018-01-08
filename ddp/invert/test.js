import { car, cons, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
// function get: `get(index, list)`
import { l, length, get } from 'hexlet-pairs-data'; // eslint-disable-line
import make from './game'; // eslint-disable-line

test('CardGame', () => {
  let cardIndex = 2;
  const cards = l(
    cons('Костяная кочерга гробницы', () => 7),
    cons('Памятный металл палача', health => Math.round(health * 0.8)),
  );
  const game = make(cards, (c) => {
    cardIndex = cardIndex === 0 ? 1 : 0;
    return get(cardIndex, c);
  });
  const log = game('John', 'Ada');

  expect(length(log)).toBe(5);

  const step1 = get(0, log);
  expect(pairToString(car(step1))).toBe('(10, 10)');

  const step2 = get(1, log);
  expect(pairToString(car(step2))).toBe('(10, 3)');

  const step3 = get(2, log);
  expect(pairToString(car(step3))).toBe('(2, 3)');

  const step4 = get(3, log);
  expect(pairToString(car(step4))).toBe('(2, -4)');

  const step5 = get(4, log);
  expect(pairToString(car(step5))).toBe('(2, -4)');
});
