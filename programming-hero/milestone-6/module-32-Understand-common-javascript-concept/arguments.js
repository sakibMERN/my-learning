function sum(a, b, c){
    // for(argument of arguments){
    //     console.log(argument);
    // }
    const args = [...arguments];
    console.log(args);
    const result = a + b + c;
    return result;
}
// console.log(arguments);
const total = sum(45,89, 12, 98,45);
// console.log(total);
console.log(typeof sum);
console.log(sum.length);