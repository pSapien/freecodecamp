const getPriority = item => item[1];
const getValue = item => item[0];

class PriorityQueue {
  constructor() {
    this.collection = [];
  }
  
  enqueue(v) {
    // NOTE: PriorityQueue will be much efficient with Heaps
    if (this.isEmpty()) {
      this.collection.push(v);
    } else {
      const indexToBeInserted = this.collection.findIndex(item => getPriority(item) > getPriority(v));
      if (indexToBeInserted === -1) {
        this.collection.push(v);
      } else {
        this.collection = [
          ...this.collection.slice(0, indexToBeInserted),
          v,
          ...this.collection.slice(indexToBeInserted),
        ]
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    return getValue(this.collection.shift());
  }

  isEmpty() {
    return !Boolean(this.collection.length);
  }

  size() {
    return this.collection.length;
  }
}
