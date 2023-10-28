// declearing a anonymous function expression

const sum = function(x ,y){
    return x + y;
}

// declearing a named function expression
const product = function multiply(x , y){
    return x * y;
}
console.log(sum(3,5));
console.log(product(3,5));

// storeing a function in an array
function add (x ,y){
    return x + y;
}


const subtract = function(x ,y){
    return x - y;
}

function multiply (x ,y){
    return x * y;
}

const divide = function(x ,y){
    return x / y;
}
const operation = [add, subtract, multiply,divide];

operation[1];
operation[1](100,4);
 for (const func of operation) {
    let result = func(30,5);
    console.log(result);  
 }
// storing a function as a value in this object
 const thing = {
    doSomething : multiply
 }

 thing.doSomething
 thing.doSomething(50,2); 



