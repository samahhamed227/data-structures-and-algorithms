'use strict'
let arr = [ [1, 2, 3], [3, 5, 7], [1, 7, 10] ];
let value = 2;

function matrix (array) {
    for (let i = 0; i < array.length; i++) {
        let sum = 0;
for(let j = 0; j < array[i].length; j++)
{
sum = sum + array[i][j];

}
  array[i] = sum;
}
    
return array;
}
matrix (arr);