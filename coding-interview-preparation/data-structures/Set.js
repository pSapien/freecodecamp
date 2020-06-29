class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.keys(this.dictionary);
  }

  add(element) {
    if (this.has(element)) return false;

    this.dictionary[element] = true;
    this.length++;
    return true;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }

  union(setB) {
    const union = new Set();
    this.values().forEach(elemA => union.add(elemA));
    setB.values().forEach(elemB => union.add(elemB));
    return union;
  }

  intersection(setB) {
    const intersection = new Set();

    const isLargerSet = this.dictionary.length > setB.length;
    const largeSet = isLargerSet ? this : setB;
    const smallSet = isLargerSet ? setB : this;

    smallSet.values().forEach(elemA => {
      if (largeSet.has(elemA)) intersection.add(elemA);
    });

    return intersection;
  }

  difference(setB) {
    const diff = new Set();

    const isLargerSet = this.dictionary.length > setB.length;
    const largeSet = isLargerSet ? this : setB;
    const smallSet = isLargerSet ? setB : this;

    smallSet.values().forEach(elemA => {
      if (!largeSet.has(elemA)) diff.add(elemA);
    });

    return diff;
  }

  isSubsetOf(setB) {
    return this.values().every(elemA => setB.has(elemA));
  }
}
