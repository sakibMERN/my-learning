function vatKhaw(){
    console.log("hand wash diye vat khaw.");
    console.log("boso");
    console.log("plate a khabar dabar naw");
    console.log("taratari khaw");
}

// vatKhaw();


//square function

function square (num){
    let total = num*num;
    console.log("square is the given number is: ",total);
    // console.log(num);

}
// square(10);
// square(5);
// square(12);
// square(15);


function add(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    console.log(sum);
}

// add(25, 10, 5);

function addAll (a, b, c, d) {
    const total = a + b + c + d;
    console.log(total);
}

// addAll(5, 43, 34, 3); //58

//**If i don't give a argument  */
function addAll (a, b, c, d) {
    const total = a + b + c + d;
    console.log(total);
}

addAll(5, 43, 34); //NaN

function add(a){
    if(typeof a === undefined){
        console.log("got ist");
    }
}

add();
