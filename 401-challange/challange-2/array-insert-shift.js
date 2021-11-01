'use strict';

let array = [5,2,9,7,4];

function insertShiftArray(array , number){
    let index ;
    let indexPosition = array.length/2;

    if(indexPosition % 2 == 0 ){
        index = indexPosition;
    } 
    else {
        index = indexPosition + 1;
    }
    array.splice(index , 0 , number);
    return array;
}


 insertShiftArray (array,5)
  
