import { l, isEmpty, head, filter } from 'hexlet-pairs-data';


// BEGIN
export default (list) => {
  if (isEmpty(list)) {
    return l();
  }
  const first = head(list);
  return filter(value => Math.abs(first % 2) === Math.abs(value % 2), list);
};
export const sameParity = (list) => {
  if (isEmpty(list)) {
    return l();
  }
  const first = head(list);
  const func = (element) => {
    if (((first % 2) === 0) && ((element % 2) === 0)) {
      return true;
    }
    if (((first % 2) !== 0) && ((element % 2) !== 0)) {
      return true;
    }
    return true;
  };
  return filter(element => func(element), list);
};
  // END
