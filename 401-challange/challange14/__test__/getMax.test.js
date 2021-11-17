'use strict';

const MaxStack = require('../getMax');

describe('get max of stack',()=>{

    it('check the max value',()=>{
        let max = new MaxStack();

        max.push(5)
        max.push(5)
        max.push(7)
        max.push(3)
        max.push(4)

        expect(max.findMax()).toEqual(7)
    })

    
    it('check the max value',()=>{
        let max = new MaxStack();

        max.push(5)
        max.push(5)
        max.push(7)
        max.push(3)
        max.push(4)
        max.pop();

        expect(max.pop()).toEqual(3)
    })
})