console.log(1);
console.log(2);
setTimeout(() => {
    console.log(3)
}, 6000)
setTimeout(()=> {
    console.log("I love coding");
}, 5000)

//if you want to stop this . you have to use in console (clearTimeout(clockId))
console.log(4);
console.log(5);
console.log(6);

let num = 0;
const clockId = setInterval(() => {
    num++;
    if(num >= 6){
        clearInterval(clockId);
    }
    console.log(`clock id: ${clockId}`,num);

}, 1000)

//if you want to stop this . you have to use in console (clearInterval(clockId))