import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { definer } from './generic'; // eslint-disable-line
import { attach } from './type'; // eslint-disable-line
const defmethod = definer('SimpleCard');

const make = (name, damagePoints) =>
  attach('SimpleCard', cons(name, damagePoints));

export default make;

defmethod('getName', self => car(self));

defmethod('damage', self => cdr(self));
