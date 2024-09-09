/****Problem------------->>>>1
 * You are given an array of numbers. Count how many times the a number is repeated in the array.
sample-input:
numbers = [5,6,11,12,98, 5]
find: 5
output: 2
#ata kivabe korbo?
 */








/***Problem------------->>>>2
 * Onu Biswas
// let arr = [1, 12, 34, "munna", { name: "munna" }, 2, 10, 63];
// let arr = "munna";
let arr = [1 , null, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] ;
function deleteInvalids(pera) {
if (Array.isArray(pera)) {
let freesArray = [];
for (let v of pera) {
if (typeof v === "number" && isNaN(v)===false) {
//jegula velu number type ar ogulake freesarray te add kore dichi
freesArray.push(v);
}
}
return freesArray; //ailine ta loop ar baire lekhte hobe
} else {
return "Input Arry";
}
}
let result = deleteInvalids(arr);
console.log(result);
10 line ay && isNaN(v)=== false den





solution====>>>
একটা এক্সট্রা কন্ডিশন এড করে নেন। IsNaN ভ্যালিডেশন করেন। কারণ NaN কে নম্বর টাইপ হিসেবে consider করা হয়।
if(typeof v === "number" && !isNaN(v) ){
}
 */