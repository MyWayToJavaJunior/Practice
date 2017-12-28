import { l, isEmpty, head, tail, filter, toString as listToString } from 'hexlet-pairs-data';


// BEGIN
export default (list) => {
    if (isEmpty(list)) {
      return l();
    }
  
    const first = head(list);
  
    return filter(value => Math.abs(first % 2) === Math.abs(value % 2), list);
  };
  const sameParity = (list) => {
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
      if (((first % 2) === 0) && (element === 0))  {
        return true;
      }
    };
    return filter(element => func(element), list);
  };
  // END