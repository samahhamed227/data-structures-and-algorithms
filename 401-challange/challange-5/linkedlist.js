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
        if (this.head==null) {
            this.head = node;

        }else{
          node.next=this.head;
          this.head=node;
        }
    }
   
    includes(value) {
        let currentNode = this.head;
        let result ;
        while (currentNode.next) {
            if (currentNode.value == value) {
            return true ;
          
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
module.exports = LinkedList;