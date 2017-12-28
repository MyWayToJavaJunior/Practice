// BEGIN
const zip = (list1, list2) => {
    const iter = (first, last, acc) => {
      if (isEmpty(first) || isEmpty(last)) {
        return acc;
      }
  
      const newAcc = cons(l(head(first), head(last)), acc);
      return iter(tail(first), tail(last), newAcc);
    };
  
    return reverse(iter(list1, list2, l()));
  };
  
  export default zip;
  // END
  const zip = (list1, list2) => {
    if (isEmpty(list1) || isEmpty(list2)) {
      return l();
    }
    const iter = (list1, list2, acc) => {
      if (isEmpty(list1) || isEmpty(list2)) {
      return reverse(acc);
    }
    return iter(tail(list1), tail(list2), cons(l(head(list1), head(list2)), acc));
    }
    return iter(list1, list2, l());
  };