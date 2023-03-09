'use strict'

function acc(){
    let total=0;

    function sum(number){
        total+=number;
        return total;
    }
    return sum;
}
const newSum=acc()

console.log(newSum(4));
console.log(newSum(8));