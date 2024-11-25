/**
 * for a given string tell me whether it has even number of characters or not
 */

function evenSizedString (str){

    const size = str.length;

    console.log(str,size);

    if(size % 2 === 0){
        console.log("even size");
        return true;
    }
    else{
        console.log("odd size");
        return false;
    }
}

// evenSizedString("dhaka");    //odd size
// evenSizedString("faka");     //even size

function doubleOrTriple (number, doDouble){
    if(doDouble){
        const total = number * 2;
        return total;
    }
    else{
        const total = number * 3;
        return total
    }
}

// console.log(doubleOrTriple(5,true));  //10
// console.log(doubleOrTriple(10,false));  //30

/**
 * find array length using function
 */

function numberOfElement (numbers){
    const length = numbers.length;
    return length;
}

const totalLength = numberOfElement([10, 20 , 40 , 50, 60]);

console.log(totalLength);

function getAge(person){
    const age = person.age;
    return age;
}

const person = {
    name: "sakib",
    age: 28,
    color: "white",
}

const personAge = getAge(person);

console.log(personAge);
