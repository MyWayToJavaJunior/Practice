// BEGIN
export default (words, stopWords) =>
  words.map(word => word.toLowerCase())
    .filter(word => !stopWords.includes(word))
    .reduce((acc, word) => {
      if (!acc.has(word)) {
        return acc.set(word, 1);
      }
      return acc.set(word, acc.get(word) + 1);
    }, new Map());
// END
