
'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
             this.length ++;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;

            }
          this.length ++;

            currentNode.next = node;
        }
    }
    insertAfter(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode.next) {
            if (currentNode.value === value) {
            this.length +=1;

                currentNode.next = {
                    value: node.value,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
    }
    insertBefore(value, newVal) {
        let node = new Node(newVal);
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
            this.length +=1;

                const currentVal = currentNode.value;
                currentNode.value = node.value;
                currentNode.next = {
                    value: currentVal,
                    next: currentNode.next
                };
                break;
            }
            currentNode = currentNode.next;
        }
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
        
        
  
      kthFromEnd(k) {
        console.log('length = ',this.length);
        console.log('k = ', k);
        if (k < 0 || k >= this.length) {
            return 'Wrong Value of k';
        }
        else {
            let current = this.head
            for (let i = 1; i < (this.length - k) ; i++) {

                current = current.next;
            }

            return current.value;

        }
    }

   
// let list = new LinkedList();
// list.append(1);
// list.append(3);
// list.append(8);
// list.append(2);

// console.log(list.toString())
// console.log(list.kthFromEnd(0));


}