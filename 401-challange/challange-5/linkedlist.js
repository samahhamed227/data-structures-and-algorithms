'use strict';

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        const node = new Node(value);
        //it will be excuted one time at creating new linked list
        if (!this.head) {
            this.head = node;
            return this;
        }

        // if there is a node existed in the linked list
        let current = this.head;
        while (current.next) { current = current.next; }
        current.next = node;

        return this;
    }
   
    includes(value) {
        let currentNode = this.head;
        let result ;
        while (currentNode.next) {
          
            if (currentNode.value == value) {
                result = true;
            } else {
                result= false;
            }

               currentNode = currentNode.next;
        }
        return result;
    }

    toString() {
        let values = this.head;
        let result = [];
        while (values) {
            result.push(` { ${values.value} } `)
          values = values.next;
        }
         result.push(` NULL `)
        let strRes = result.join('->');
        return strRes;
    }
}

let link = new LinkedList();
link.insert(1);
link.insert(2);
link.insert(3);
link.insert(4);

console.log(link);
console.log(link.includes(3));
console.log(link.toString());




module.exports = LinkedList;