// Normal if else statement

const age = 10;

if (age > 10) {
    console.log("Ami melai dhukte parbo");
} else {
    console.log("ami melai dhukte parbo na.");
}

// else if conditional statement 

const age1 = 10;

if (age1 >= 18) {
    console.log("You are valid for all ride.");
} else if (age1 >= 13) {
    console.log("you are valid for few ride.");
} else {
    console.log("You are valid for children ride");
}

// Nested if else condition 

let age3 = 18;
let withAdult = false;

if (age3 >= 15) {
    console.log("You are ready for go to ghost house");
    if (withAdult) {
        console.log("You are able for go to ghost house");
    } else {
        console.log("you are not able for go to ghost house");
    }
} else {
    console.log("You are not ready to go for ghost house");
}