//truthy ==>>> 'almas', 5, true, {}, []
//falsy ===>> "", 0 , false, null, undefined

//check truthy
let myVar = 5;
if(myVar){
    myVar = myVar*100; 
}
else{
    myVar = 0;
}

//check falsy or negative
let myMoney = 50;
if(!myMoney){

}


const money = 800;
let food;
if(money > 100){
    food = "biriyani khabo";
}
else{
    food = "cha biscuits"
}
//make it shortcut
let food1 = money > 100 ? "biriyani" : "cha biscuits";
console.log(food1);

let drink = (money > 100 && myVar > 100) ? "coke" : "filter water";
console.log(drink);


//2.====>>>>> number to string conversion
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
console.log(numStr); //52
console.log(typeof numStr); //string
//Note: If you add an empty string with a number, the number convert into a string.


//3.=======>>>>> string to number conversion
const input = '560';
console.log(typeof input); //string
const inputNum = +input;
console.log(inputNum); //560
console.log(typeof inputNum); //number
//Note: if you want to convert a string to a number. you just assign a "+" operator before the string.


//shortcut ternary
const isActive = true;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive ? showUser() : hideUser();

//more shortcut
//use "&&" if the left side is true then right side will be executed
isActive && showUser();
//use "&&" if the left side is false then right side will be executed
// !isActive && hideUser();

//use '||' if the left side is false then right side will be executed.
isActive || hideUser()

//toggle boolean
isActive = !isActive;
//Note: if the value is true, it convert the value to false. or if the value is false, it convert the value into true.