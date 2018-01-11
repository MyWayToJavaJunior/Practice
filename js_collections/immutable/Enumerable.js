class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }
  select(fn) {
    // BEGIN (write your solution here)
    const selected = this.collection.map(fn);
    return new Enumerable(selected);
    // END
  }
  orderBy(fn, direction = 'asc') {
    // BEGIN (write your solution here)
    const compare = (a, b) => {
      const a1 = fn(a);
      const b1 = fn(b);
      const compareResult = direction === 'asc' ? 1 : -1;
      if (a1 > b1) {
        return compareResult;
      } else if (a1 < b1) {
        return -compareResult;
      }
      return 0;
    };
    const ordered = this.collection.slice().sort(compare);
    return new Enumerable(ordered);
    // END
  }
  where(fn) {
    const filtered = this.collection.filter(fn);
    return new Enumerable(filtered);
  }
  toArray() {
    return this.collection;
  }
}
export default Enumerable;
