print5();
print10(); //ReferenceError: Cannot access 'print10' before initialization
for(let i = 0; i < 5; i++){
    console.log(i);
}
// console.log("outside",i);

function print5(){
    console.log("inside print:",5);
}

/**
 * Note: when We make a function . I make hoisted and go to the to of the execution. So that, I can call the function at the top. And it give us output.
 */

const print10 = function(){
    console.log("inside print10", 10);
}

/**
 * When we set a function inside a variable. I can't hoisted at the top . so that when we call it at the function it give's us reference error.
 * Note: we can't use a function before initialization when we assign a function inside a variable.
 * 
 */
