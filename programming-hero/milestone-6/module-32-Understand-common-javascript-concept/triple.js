//always use ===
//equal comparison doesn't work for non-primitive
const first = 2;
const second = "2";
if(first == second){
    console.log("values are equal");
}
else{
    console.log("values are not equal");
}

const a = 2;
const b = true;
if(a == b){
    console.log("values are true");
}
else{
    console.log("values are not true");
}

//confusing 
const c = 1; 
const d = true;
if(c == d){
    console.log("this is right"); //this is right;
}
else{ 
    console.log("this is not right");
}
//Note: as you are seen at the last example . c == d provide the answer is true. because in programming language 0= false and 1 = true.so that the answer is true.

/**
 * Behind the seen it seems
    1. type coercion
    2. type conversion
    3. type casting
 */
// const e = 0;
const e = "0"; //it coercion "0" to 0
const f = false;
if(e == f){
    console.log("the input is right"); //the input is right
}
else{
    console.log("the input is false");
}

/**non-primitive data type */
// const one = {id: 1};
const one = [];
// const two = {id: 1};
const two = [];
if(one === two){
    console.log("the object is right"); //the input is right
}
else{
    console.log("the object is false"); //the object is false;
}
//Note: If you compare non-primitive data type(like: array, object), it doesn't check the value or type. It just check reference.

// const three = {id: 1};
const three = [];
// const three = {id: 1};
const four = three;
if(three === four){
    console.log("the reference is equal"); //the reference is equal
}
else{
    console.log("the reference is not equal"); //the object is false;
}