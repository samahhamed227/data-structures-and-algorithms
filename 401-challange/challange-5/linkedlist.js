'use strict';

const Node = require('./node');

class LinkedList{
    constructor(){
        this.head=null;
    }

    insert(value){
        let newNode =  new Node(value);
        if (!this.head) {
            this.head=newNode;
        }else{
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode=currentNode.next;
            }
            currentNode.next=newNode;
        }
    }

    includes(value){
        let currentNode= this.head;
        while (currentNode !== null) {
            if (currentNode.value == value) {
                return true;
                currentNode=currentNode.next;
            }
            return false;
        }
    }
    toString(){
        let string = ''
        let currentNode= this.head;
        while (currentNode !== null) {
            string = `${currentNode.value} --> Null`;
            currentNode=currentNode.next;
        }
        return string

    }
}

module.exports=LinkedList;