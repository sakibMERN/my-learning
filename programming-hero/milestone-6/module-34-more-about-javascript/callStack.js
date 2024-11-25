console.log(1);
console.log(2);
console.log(3);
setTimeout(()=> {
    console.log('lazy logged');
}, 4000)
console.log(4);
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}



function one(){
    console.log("A");
    two();
    console.log("C");
}
function two(){
    console.log('B');
}
one(); 

/**
 * expected result
2
4
5
6
A
B
C
lazy logged
 */


console.log("===========>>>>");
// console.log('I');

//This will be shown after 2 seconds
setTimeout(()=> {
    console.log("eat");
}, 2000);

console.log("Ice cream");


function first(){
    setTimeout(()=> {
        console.log("function first() called");
    }, 1000);
}

function second(){
    console.log("function second() called");
}

function main(){
    first();
    second();
}

main();

/**
 * expected result
 * 
function second() called
function first() called
 */