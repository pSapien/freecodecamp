class Stack {
  constructor() {
    this.collection= [];
  }

  push(v) {
    this.collection.push(v);
  }

  pop() {
    return this.collection.pop();
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.collection[0];
  }

  isEmpty() {
    return !Boolean(this.collection.length);
  }

  clear() {
    this.collection.length = 0;
  }
}