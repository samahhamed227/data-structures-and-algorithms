'use strict';

const arr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];

const merge = (left, right , arr) => {

    let i = 0;
    let j = 0;
    let k = 0;
    
    while(i < left.length && j < right.length){
        if (left[i] <= right[j]){
            arr[k] = left[i];
            i++
        }else{
            arr[k] = right[j];
            j++
        }
        k++
    }
    if (i === left.length) {
        arr[k] = right[j];
        j++;
        k++;
      } else {
        arr[k] = left[i];
        i++;
        k++;
      }
};

const mergeSort = (arr) => {

    if(arr.length === 0 ){
        return  arr;
    }else{

        let n  = arr.length;
        let mid = Math.floor(n / 2);
    
        if(n > 1){
            let left = arr.slice(0, mid);
            let right = arr.slice(mid);
    
            mergeSort(left);
            mergeSort(right);
            merge(left, right,arr);
        }
    }
    return arr;
};
  
console.log(mergeSort(arr));

module.exports = mergeSort;
