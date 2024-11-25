const disha = 56;
const salman = 95;

if(disha > salman){
    console.log("disha will get the strobery.");
}
else{
    console.log("salman will get the strobery.");
}

//inside a function

function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}

const max = getMax(85, 70);
console.log("max number is: ",max);