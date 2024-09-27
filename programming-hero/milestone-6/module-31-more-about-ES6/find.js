const players = [75, 65, 67, 72, 55, 59];

const selected = players.find(player => player > 70);
// console.log(selected); //75

//Note: find method give you the first matched condition . if don't match any element. it give you "undefined".
const selected1 = players.find(player => player > 80);
console.log(selected1);  //undefined