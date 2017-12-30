import { l, isEmpty, head, tail, concat, filter } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) {
    return list;
  }
  const first = head(list);
  const left = filter(element => element < first, tail(list));
  const right = filter(element => element >= first, tail(list));
  const leftFirst = concat(left, l(first));
  return concat(leftFirst, right);
};
export default sort;
// END
