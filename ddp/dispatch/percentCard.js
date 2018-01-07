import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line

const defmethod = definer('PercentCard');

const make = (name, percent) =>
  attach('PercentCard', cons(name, percent));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', (self, health) =>
  Math.round(health * (cdr(self) / 100)));
