class Enumerable {
  constructor(collection) {
    this.collection = collection;
  }
  // BEGIN (write your solution here)
  select(fn) {
    this.collection = this.collection.map(fn);
    return this;
  }
  // END
  // BEGIN (write your solution here)
  orderBy(fn, direction = 'asc') {
    const comparator = (a, b) => {
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
    this.collection.sort(comparator);
    return this;
  }
  // END
  where(fn) {
    this.collection = this.collection.filter(fn);
    return this;
  }
  toArray() {
    return this.collection.slice();
  }
}
export default Enumerable;
