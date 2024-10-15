const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

let find = [];
for(let item of numbers){
    item>50 ? find.push(item) : null;
}
console.log(find); //[ 75, 54, 97 ]
