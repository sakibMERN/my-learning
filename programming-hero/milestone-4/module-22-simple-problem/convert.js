//inch to feet

function inchToFeet (inch){
    const feet = inch / 12;
    return feet;
}



const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);


//specified feet and inch.

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    // const totalHeight = `The height is ${feetNumber} feet and ${inchRemaining} inch.`;
    const totalHeight = feetNumber +"ft"+ " " + inchRemaining + "inch";
    
    return totalHeight;
    
}

const shuvoHeight2 = inchToFeet2(55);
console.log("shuvoHeight2: ", shuvoHeight2);


// Miles to kilometer 

function milesToKilometer (mile){
    const mileFraction = mile * 1.609;  //1 mile = 1.62km
    const kilometer = parseInt(mileFraction);
    const meterfraction = (mile * 1609.34) % 1000;
    const meter = meterfraction.toFixed(2);
    const total_distance = kilometer + "km"+ " " + meter +"m";

    return  total_distance;

}

const distance = milesToKilometer(5);
console.log(distance);

//kilometer to mile
function kilometerToMile(kilometer){
    const mile = kilometer / 1.609;
    return mile.toFixed(2);
}

const totalMile = kilometerToMile(5);
console.log(totalMile);