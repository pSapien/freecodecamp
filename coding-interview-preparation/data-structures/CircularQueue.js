class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    if (this.isFull()) {
      return null;
    }

    this.queue[this.write] = item;
    this.write = this.next(this.write);
    return item;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }

    const dequeuedItem = this.queue[this.read];
    this.queue[this.read] = null;
    this.read = this.next(this.read);
    return dequeuedItem;
  }

  isEmpty() {
    return (this.write === 0 && this.read === 0 && this.queue[0] === null);
  }

  isFull() {
    return this.queue[this.write] !== null;
  }

  next(pointer) {
    if (pointer === this.max) return 0;
    return pointer + 1;
  }
}

const CQ = new CircularQueue(5);
CQ.enqueue('a');
CQ.enqueue('b');
CQ.enqueue('c');
CQ.enqueue('c');
CQ.enqueue('c');
CQ.enqueue('d');
CQ.enqueue('e');
console.log(CQ.queue, CQ.write, CQ.read);
console.log(CQ.dequeue());
console.log(CQ.queue, CQ.read)

/**
CQ.dequeue();
CQ.dequeue();
CQ.dequeue();
console.log(CQ.queue, CQ.write, CQ.read);

CQ.enqueue('d');
CQ.enqueue('e');
CQ.enqueue('f');
console.log(CQ.queue, CQ.write, CQ.read);
*/

