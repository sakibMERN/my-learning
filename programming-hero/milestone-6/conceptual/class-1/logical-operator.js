//Logical operator are work on three way.
//1. and(&&)
//2. or(||)
//3. not(!)

// const money = true;
//Note: If variable have value, then it is truthy. Either it will be false.

/**and(&&) */
//left && right
//Note: if left side is true , then work right side.

// const money = ""; //""
// const money = 0;  //0
const money = 1;  //Vercity jabo



console.log(money && "Vercity jabo");

/**or(||) */
//Note: if the left is true , left is execute. or left is false, right is execute.

// const bus = "bus ace";
// const rickshaw = "rickshaw ace";

// console.log(bus || rickshaw); //bus ace


const bus = "";
const rickshaw = "rickshaw ace";

console.log(bus || rickshaw); //rickshaw ace
//because the bus is false.

/**Ternary */
//syntax ===>> statement ? if true : false;
const x = 5;

console.log(x === 5? "number is 5" : "number is not five"); //5