class Node {

    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }


class Queue {

    constructor() {
      this.front = null;
      this.rear = null;
      this.length = 0;
    }
  
    enqueue(value) {
      const newNode = new Node(value);
  
      if (this.isEmpty()) {
        this.front = newNode;
        this.rear = newNode;
        this.length += 1;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
        this.length += 1; return this.front;
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return 'The queue is Empty';
      }
  
      const temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      this.length -= 1;
      return temp.value;
  
    }
  
    peek() {
      if (this.isEmpty()) {
        return null;
      }
      return this.front.value;
    }
  
    isEmpty() {
      return this.length === 0;
    }
  
  }
  
  const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

queue.dequeue();
console.log(queue);