const jim = 156;
const tim = 96;
const kim = 100;

if(jim > tim && jim > kim){
    console.log("jim is the ultimate boss.");
}
else if( tim > kim && tim > jim){
    console.log("tim is the boss.");
}
else{
    console.log("kim is the boss.");
}



//do with function
function maxThree(jim, tim, kim){
    if ( jim > tim && jim > kim){
        return "jim is the real boss."
    }
    else if(tim > kim && tim > jim){
        return "tim is the real boss."
    }
    else{
        return "kim is the real boss."
    }
}

const maxNumber = maxThree(158, 300, 500);
console.log(maxNumber);

const max = Math.max(jim, tim,kim);
console.log('THE LARGEST NUMBER IS: ',max);