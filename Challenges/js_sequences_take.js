import { l, isEmpty, head, tail, cons, toString as listToString } from 'hexlet-pairs-data';

// BEGIN
const take = (count, list) => {
    if (isEmpty(list) || count === 0) {
      return l();
    }
  
    return cons(head(list), take(count - 1, tail(list)));
  };
  
  export default take;
  // END
  const take = (n, list) => {
    if (isEmpty(list)) {
      return l();
    }
    if (n === 1) {
      return cons(head(list), null);
    }
    if (!isEmpty(list)) {
      return cons(head(list), take(n - 1, tail(list)));
    }
  };
  export default take;