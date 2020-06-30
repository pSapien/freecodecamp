// @ts-nocheck

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.front = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.front;
  }

  add(element) {
    const newNode = new Node(element);

    if (this.front === null) {
      this.front = newNode;
    } else {
      let curr = this.front;

      while (curr.next !== null) {
        curr = curr.next;
      }

      curr.next = newNode;
    }

    this.length++;
  }

  remove(element) {
    if (this.size() === 0) return null;
    if (this.size() === 1) {
      this.front = null;
    } else {
      let curr = this.front;
      let prev = null;

      while (true) {
        if (curr.element === element) {
          if (curr.next) {
            const next = curr.next;
            curr.element = next.element;
            curr.next = next.next;
          } else {
            prev.next = null;
          }
        }

        if (curr.next === null) break;

        prev = curr;
        curr = curr.next;
      }
    }

    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
    if (this.isEmpty()) return undefined;

    let index = 0, curr = this.front;

    while (true) {
      if (curr.element === element) return index;
      if (curr.next === null) break;
      curr = curr.next;
      index++;
    }

    return -1;
  }

  elementAt(searchIndex) {
    if (this.isEmpty()) return undefined;

    let index = 0, curr = this.front;
    while (true) {
      if (searchIndex === index) return curr.element;
      if (curr.next === null) break;
      curr = curr.next;
      index++;
    }

    return undefined;
  }

  removeAt(removeIndex) {
    if (removeIndex < 0 || removeIndex >= this.length) return null;

    let removedElement = null;

    if (this.size() === 1) {
      removedElement = this.front.element;
      this.front = null;
    } else {
      let index = 0, curr = this.front, prev = null;
      while (true) {
        if (removeIndex === index) {
          removedElement = curr.element;

          if (curr.next) {
            const next = curr.next;
            curr.element = next.element;
            curr.next = next.next;
          } else {
            prev.next = null;
          }
        }

        if (curr.next === null) break;

        prev = curr;
        curr = curr.next;
        index++;
      }
    }

    this.length--;
    return removedElement;
  }

  addAt(addIndex, element) {
    if (addIndex < 0 || addIndex >= this.size()) return false;

    const newNode = new Node(element);
    this.length++;

    if (this.size() === 0) {
      this.front = newNode;
    } else if (addIndex === 0) {
      newNode.next = this.front;
      this.front = newNode;
    } else if (addIndex > 0) {
      let prev = null, curr = this.front, index = 0;

      while (true) {

        if (index === addIndex) {
          if (curr.next) {
            prev.next = curr.next;
          } else {
            prev.next = null;
          }
        }

        if (curr.next === null) break;

        index++;
        prev = curr;
        curr = curr.next;
      }
    }
  }
}

const LL = new LinkedList();
LL.add('cat');
LL.add('dog');
LL.add('fish');
// LL.remove('fish');
// LL.remove('dog')
// console.log(LL.indexOf('dog'));
console.log(LL.elementAt(0));
console.log(LL.elementAt(1));
console.log(LL.elementAt(2));

