function checkName(name) {

  if (typeof name === "string") {

    const expectedLetters = ["a", "y", "i", "e", "o", "u", "w"];

    //convert the input string into an array
    //let letters = name.split("");

    //***convert all the string to lowercase.
    // let letters = name.toLowerCase().split("");

    //get the last letter of the array
    // let lastLetter = letters[letters.length - 1];

    // or 
    let lastLetter = name.toLowerCase().slice(-1);
    

    //check the good or bad name
    if (expectedLetters.includes(lastLetter) === true) {
      return "This is a good name.";
    } else {
      return "This is a bad name.";
    }
  } 
  else {
    return "Make sure the input is string.";
  }
}
console.log(checkName("sakib")); //This is a bad name.
console.log(checkName("kabbO")); //This is a bad name.
console.log(checkName(18));  //This is a bad name.


// ====================================>>>>>>Another way 

function checkName2(name){

    //string validation
    if(typeof name !== "string"){
        return 'Invalid'
    }
    let lastLetter = name.toLowerCase().slice(-1);
    const expectedLetters = ["a", "y", "i", "e", "o", "u", "w"];

    // let result = false;
    // for(char of expectedLetters){
    //     if(char === lastLetter){
    //         result = true;
    //     }
    // }

    //another way
    let result = expectedLetters.includes(lastLetter);
    
    return result ? "Good Name": "Bad Name";
}

console.log(checkName2("rehana"));  //good name
console.log(checkName2("sakib"));  //bad name
console.log(checkName2(18));  //Invalid

