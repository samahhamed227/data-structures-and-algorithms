
class Node {

    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  class Stack {
  
    constructor() {
      this.top = null;
      this.length = 0;
    }
  
    push(value) {
    const node =new Node(value);
    if(this.top) {
    node.next = this.top;
    } 
this.top = node;
  
    }
  
    pop() {
  
      if (this.isEmpty()) {
        console.log('No Nodes are left in your stack');
        return undefined;
      }
  
      const temp = this.top; // keep a reference of our top node for removal later
      this.top = this.top.next;
      temp.next = null; // removal of the last added node in the stack
      return temp.value;
    }
  
    /**
     * Peek is used to get the last node value that was added to the stack 
     * @returns {any} Node
     */
    peek() {
      if (this.isEmpty()) {
        return  undefined;

      }
      return this.top.value;
    }
  
    /**
     * Is Empty is a boolean function that will check for us if the stack is empty or not
     */
    isEmpty() {
      if (this.top === null) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  
  const newStack = new Stack();
  
  
  newStack.push(3);
  newStack.push(2);
  newStack.push(1);
  console.log(newStack.peek());

  
//   console.log(newStack.peek()); // 3
//   newStack.pop();
//   console.log(newStack.peek()); // 2
//   newStack.pop();
//   console.log(newStack.peek()); // 1
//   newStack.pop(); // should console log the error message
//   console.log(newStack.peek()); // 2
    module.exports = Stack;
