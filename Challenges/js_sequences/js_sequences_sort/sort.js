import { l, isEmpty, head, tail, concat, filter } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
const sort = (list) => {
  if (isEmpty(list)) {
    return list;
  }
  const first = head(list);
  const left = filter(element => element < first, tail(list));
  const right = filter(element => element >= first, tail(list));

  return concat(sort(left), concat(l(first), sort(right)));
};
export default sort;
// END

