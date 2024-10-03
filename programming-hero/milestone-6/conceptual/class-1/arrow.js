function info(){
    return "ki chai ....?"
}

const result = info();
// console.log(result);

//make duplicate with arrow function
//===>>> Sample 1
const info1 = () => "ki chai ....?"

console.log(info1()); //"ki chai ....?"

//Note : if you use arrow function and while it will just one line. you don't have to return it. it will be return the result implicitly.

//Sample -2
const double = x => x * 2;

console.log(double(3)); //6
//Note: if you have just one parameter. you don't have use to parenthesis around the parameter.

//sample -3
const add = (x,y) => {
    const total = x + y;
    
}

console.log(add(3, 4)); //undefined

//sample -3(alternate)
const add1 = (x,y) => {
    const total = x + y;
    return total;
    //Note: if you use arrow function and the function more than 1 line . you have to "return" the function. 
}

console.log(add1(3, 4)); //7