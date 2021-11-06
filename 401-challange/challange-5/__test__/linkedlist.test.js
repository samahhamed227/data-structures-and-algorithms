'use strict';

const LinkedList= require('../linkedlist');

describe('linked list module',()=>{

    it('Can successfully instantiate an empty linked list',()=>{
        let newList = new LinkedList();
        expect(newList.head).toEqual(null);
    })

    it('Can properly insert into the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })

    it('The head property will properly point to the first node in the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })

    it('Can properly insert multiple nodes into the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        expect(newList.head.value).toEqual(initialValue);

        let anotherValue = 'second value';
        newList.insert(anotherValue);
        expect(newList.head.next.value).toEqual(anotherValue);
        expect(newList.head.next.next).toEqual(null);
        expect(newList.head.value).toEqual(initialValue)
    })

    it('Will return true when finding a value within the linked list that exists',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        expect(newList.includes(initialValue)).toEqual(true);
    })
    it('Will return false when searching for a value in the linked list that does not exist',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        newList.includes('fake value');
        expect(newList.includes('fake value')).toEqual(false);
    })
    it('Can properly return a collection of all the values that exist in the linked list',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.insert(initialValue);
        expect(newList.toString()).toEqual('first value --> Null');
    })
})