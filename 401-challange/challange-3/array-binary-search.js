'use strict';

let arr = [5,7,2,8,4];
let value = 2;

function BinarySearch (arr,value) {
     let first = 0;
     let last = arr.length - 1;
     while(first <= last){
          let middle = Math.ceil((first+last)/2);
          if(arr[middle] === value){
                return value;
          }else if(arr[middle] < value){ 
                  return first = middle + 1;
           }else{
                  return last = middle - 1;
           }
      }
     return -1;
}
BinarySearch (arr,2)

