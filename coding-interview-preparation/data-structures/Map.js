class Map {
  constructor() {
    this.collection = {};
    this.length = 0;
  }

  add(key, value) {
    if (!this.collection[key]) this.length++;
    this.collection[key] = value;
  }

  remove(key) {
    if (!this.has(key)) return false;

    delete this.collection[key];
    this.length--;
    return true;
  }

  get(key) {
    if (!this.has(key)) return undefined;

    return this.collection[key];
  }

  has(key) {
    return this.collection[key];
  }

  values() {
    return Object.values(this.collection);
  }

  clear() {
    this.collection = {};
    this.length = 0;
    return true;
  }

  size() {
    return this.length;
  }
}