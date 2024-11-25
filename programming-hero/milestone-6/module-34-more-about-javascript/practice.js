// let x = 1;
// let intervalId = setInterval(() => {
//  console.log(x++);
//  if (x > 3) clearInterval(intervalId);
// }, 1000);

// intervalId()

// async function myFunction() {
//     return "Hello";
//    }
//    myFunction().then(console.log);

// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// console.log("D"); //A D B C


fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))