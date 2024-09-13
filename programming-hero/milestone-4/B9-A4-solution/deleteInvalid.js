function deleteInvalid(array){
    if(!Array.isArray(array)){
        return "Invalid";
    }
    let newArray = [];
    for(let element of array){
        if(typeof element === "number" && isNaN(element) === false){
            newArray.push(element);
        }
    }
    return newArray;
}

// console.log(deleteInvalid([1,NaN,{name: 5}, "a", 12, 14]));
// console.log(deleteInvalid(['1',{nam:2}, NaN]));
// console.log(deleteInvalid({nam:[1,3,4]}));