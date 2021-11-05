'use strict';

let arr = [5,7,2,8,4];
function BinarySearch (arr,value) {
     let first = 0;
     let last = arr.length - 1;
     let middle=0;
     while(first <= last){
           middle = Math.floor((first+last)/2);
          if(arr[middle] > value){
                last = middle - 1;
             
          }else if(arr[middle] < value){ 
                   first = middle + 1;
           }else{
               return middle;
           }
      }
     return -1;
    
}
BinarySearch (arr,12)