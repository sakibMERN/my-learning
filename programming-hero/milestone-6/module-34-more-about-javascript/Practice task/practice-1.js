/**
 * Practice Task - 1
 * a.Write a function that displays a message after 5s.
 * b.Write a function called delayedGreeting() that takes two parameters, name and delay time, and logs a greeting message after the giving delay time.
 * 
 */

function delayedGreeting(name, delay){
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    },delay)
};
delayedGreeting("Alice", 2000);