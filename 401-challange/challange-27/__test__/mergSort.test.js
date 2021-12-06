'use strict';

const mergeSort = require ('../mergSort');

describe('Merging Sort', () => {
    it('sorting the array', () => {
      let array=[8,4,23,42,16,15];
      expect(mergeSort(array)).toEqual([4,8,15,16,23,42]);
    });
    it("should retrun the array", () => {
        let array = [];
        expect(mergeSort(array)).toEqual(array);
      });
});