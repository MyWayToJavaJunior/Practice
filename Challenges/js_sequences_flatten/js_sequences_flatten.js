import { l, reverse, isList, cons, reduce } from 'hexlet-pairs-data';

// console.log(`list ${listToString(list)}`);
// console.log(`elements ${listToString(elements)}`);
// console.log(`check ${listToString(check)}`);
// BEGIN
const flatten = (list) => {
  const removeList = (elements, accumulator) =>
    reduce((element, acc) =>
      (!isList(element) ? cons(element, acc) : removeList(element, acc)), accumulator, elements);

  return reverse(removeList(list, l()));
};

export default flatten;
// END
