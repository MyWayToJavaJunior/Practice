class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    return new Enumerable(this.collection.slice(), this.operations.concat(fn));
  }

  // BEGIN (write your solution here)
  where(...items) {
    const functions = items.map((item) => {
      if (typeof item === 'function') {
        return coll => coll.filter(item);
      }
      const keys = Object.keys(item);
      return coll => coll.filter(element =>
        keys.every(key => element[key] === item[key]));
    });
    return this.build(functions);
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
