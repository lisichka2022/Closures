'use strict'

function counter(count=0){
 
    function increase(){
        count++;
        return count;
    }
    function decrease(){
        count--;
        return count;
    }
    function value(){
        return count;
       
    }
    return{
    increase,
        decrease,
        value
    };
}
const newCounter=counter(10);

console.log(newCounter.increase())