let a = 5;
let b = 7;

console.log(a,b);
a = b;
b = a;
console.log(a,b);

console.log("------------");

let x = 6;
let y = 9;
console.log(x,y);
const temp = x;

x = y;
y = temp;
console.log(x,y);

let c = 10;
let d = 15;

console.log(c,d);

[c,d] = [d,c];
console.log(c,d);

