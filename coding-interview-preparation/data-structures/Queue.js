class Queue {
  constructor() {
    this.collection = [];
  }

  enqueue(v) {
    this.collection.push(v);
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    if (this.isEmpty()) return undefined;
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return !Boolean(this.collection.length);
  }
}