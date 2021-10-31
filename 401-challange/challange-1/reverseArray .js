'use strict';

let n =[1, 2, 3, 4, 5, 6]
function reverseArray (n){
let emptyarray = [];
for (let i = 0; i<n.length; i++)
{
    emptyarray[i]=n[n.length-1-i];
}
return emptyarray;


}

reverseArray(n)


    