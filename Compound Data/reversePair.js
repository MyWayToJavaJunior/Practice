import { cons, car, cdr } from 'hexlet-pairs';
// BEGIN (write your solution here)
const reversePair = pair => cons(cdr(pair), car(pair));

export default reversePair;
// END
