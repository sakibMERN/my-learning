/**
 * Truthy:
 * 1.true
 * 2. any number (+ve, -ve) will be truthy other then 0(falsy)
 * 3. Any " " string is truthy other than ""(empty string)
 * 4. "0", "false"
 * 5. {}(empty object)
 * 6. [] (empty array)
 * 
 * 
 * Falsy:
 * 1.false
 * 2. 0
 * 3.""(empty string)
 * 4. undefined
 * 5. null
 */
const x = [];
let y;
console.log(y); //undefined
let z = null;
if(x){
    // console.log("value of x is truthy.");
}
else{
    // console.log("value of falsy."); //value is falsy
}

//optional
//check falsy
const g = "";
if(g){
    // console.log("value is falsy");
}

//check truthy
const f = {class: 9};
if(!!x){
    console.log("value is truthy");
}