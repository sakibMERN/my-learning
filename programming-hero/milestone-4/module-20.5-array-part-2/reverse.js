const numbers = [1,2,3,4,5,6,7,8,9];

// console.log(numbers);
// const reverse =  numbers.reverse();

// console.log(reverse);

//***using 'for of' loop for reverse numbers */

const rev_number = [];

for(const num of numbers){
    // console.log(num);
    //****if i use push() for re-construct array ,the array can't reverse
    // rev_number.push(num);

    //***but, if i use unshift(). it will be work. */
    rev_number.unshift(num);


}
// console.log(rev_number);


/***
 * Using "for" loop for reverse array.
 */
let backword = [];
for(let i = (numbers.length - 1); i >= 0; i--){
    backword.push(numbers[i]);
}
console.log(backword);

// another way 

let ulta = [];
for(let i = 0; i < numbers.length; i++){
    let num = numbers[i];
    ulta.unshift(num);
}
// console.log(ulta);



/**using reverse method on a string array */
const friends = ['bill', 'mark', 'jef', 'mask'];
console.log(friends.reverse());

//You can reverse each word by this method=====>>>>>>>>>

const sentence = "I love bangladesh";

function reverseSentence(sentence){
    let newArray = sentence.split("");
    let reverse = newArray.reverse();
    let reverseSentence = reverse.join("");
    console.log(reverseSentence);
}
console.log(reverseSentence(sentence));