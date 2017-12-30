import { l, isEmpty, head, tail, cons } from 'hexlet-pairs-data';

// BEGIN
const take = (count, list) => {
  if (isEmpty(list) || count === 0) {
    return l();
  }
  return cons(head(list), take(count - 1, tail(list)));
};
export default take;
// END
export const take1 = (n, list) => {
  if (isEmpty(list)) {
    return l();
  }
  if (n === 1) {
    return cons(head(list), null);
  }
  return cons(head(list), take(n - 1, tail(list)));
};
