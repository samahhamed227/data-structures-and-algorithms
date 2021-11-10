'use strict'
class Node {
  constructor(item) {
    this.data = item
    this.next = null
  }
}
class LinkedList {
  constructor() {
    this.head = null
  }
  append(item) {
    const newNode = new Node(item)
    if (!this.head) {
      this.head = newNode
      return newNode
    }

    let current = this.head
    while (current) {
      if (!current.next) {
        break
      }
      current = current.next
    }
    current.next = newNode
    return newNode
  }

  reverse() {
    let prev = null
    let current = this.head
    let next = current ? current.next : null

    while (current) {
      this.head = current

      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return this.head
  }


  toString() {
    let cur= this.head;
    let string = '';
    while (cur) {
      let stringTwo = cur.data;
      cur = cur.next;
      string += `{${stringTwo}} -> `;
    }
    string += '{null}';
    return string;
  }
}
const list = new LinkedList()

  list.append(1)
  list.append(2)
  list.append(3)
  list.append(4)
  // list.printing()
  let c = list.toString();
  console.log(c);
  const v = list.reverse();
  console.log(v);
  // list.printing()

 
  module.exports = LinkedList;