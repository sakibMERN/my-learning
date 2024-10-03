function add(x, y){
    return x + y;
}
console.log(add(4)); //NaN

//With default value
function add1(x, y=0){
    return x + y;
}
console.log(add1(4));  //4


function add2(x=0, y=0){
    return x + y;
}
console.log(add2());  //0


function add3(x=0, y=0){
    return x + y;
}
console.log(add3(2, 1));  //3

//arrow function
const add4 = (x = 0, y = 0) => x + y;
console.log(add4(4,5)); //9