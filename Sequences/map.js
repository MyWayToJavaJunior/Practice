// BEGIN
// Рекурсивный процесс
// export const map = (func, elements) => {
//   if (isEmpty(elements)) {
//     return l();
//   }

//   return cons(func(head(elements)), map(func, tail(elements)));
// };

// Итеративный процесс (рекурсивно)
export const map = (func, elements) => {
    if (isEmpty(elements)) {
      return l();
    }
  
    const iter = (items, acc) => {
      if (isEmpty(items)) {
        return reverse(acc);
      }
      return iter(tail(items), cons(func(head(items)), acc));
    };
  
    return iter(elements, l());
  };
  
  export const mirror = elements =>
    map(element => node(name(element), reverseStr(value(element))), elements);
  // END