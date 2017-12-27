// BEGIN
export const extractHeaders = (elements) => {
    const filtered = filter(element => is('h2', element), elements);
    return map(element => node('p', value(element)), filtered);
  };
  
  export const wordsCount = (tagName, word, elements) => {
    const filtered = filter(element => is(tagName, element), elements);
    const values = map(element => value(element), filtered);
    return reduce((text, acc) => wc(word, text) + acc, 0, values);
  };
  // END