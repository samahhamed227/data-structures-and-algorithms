'use strict';

const LinkedList= require('../linked-list-zip');


describe('linked list module',()=>{

    it('constructor()',()=>{
        let newList = new LinkedList();
        expect(newList.head).toEqual(null);
    })

    it('append',()=>{
        let newList = new LinkedList();
        let initialValue = 'first value';
        newList.append(initialValue);
        expect(newList.head.value).toEqual(initialValue);
    })

  

})