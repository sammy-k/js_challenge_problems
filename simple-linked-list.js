class SimpleLinkedList {
  constructor() {
    this.linked = [];
    this.headEl = this.linked[0];
  }

  static fromArray(array) {
    array = array || [];

    let list = new SimpleLinkedList();
    [...array].reverse().forEach(elem => list.push(elem));
    return list;
  }

  size() {
    return this.linked.length;
  }

  isEmpty() {
    return this.linked.length === 0;
  }

  push(elem) {
    let element = new Element(elem, this.head());
    this.linked.unshift(element);
    this.headEl = element;
  }

  peek() {
    return this.linked.length > 0 ? this.head().datum() : null;
  }

  head() {
    return this.headEl || null;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    let val = this.peek();
    let newHead = this.head().next();

    this.headEl = newHead;
    this.linked.shift();
    return val;
  }

  toArray() {
    let array = [];

    let currentElem = this.head();
    while (currentElem !== null) {
      array.push(currentElem.datum());
      currentElem = currentElem.next();
    }

    return array;
  }

  reverse() {
    this.linked.reverse();
    for (let i = 0; i < this.linked.length; i++) {
      this.linked[i].nextElement = this.linked[i + 1] || null;
    }
    this.headEl = this.linked[0] || null;
    console.log(this)
    return this;
  }
}

class Element {
  constructor(val, nextElement) {
    this.val = val;
    this.nextElement = nextElement;
  }

  datum() {
    return this.val;
  }

  isTail() {
    return !this.next();
  }

  next() {
    return this.nextElement ? this.nextElement : null;
  }
}

module.exports = { SimpleLinkedList, Element}

