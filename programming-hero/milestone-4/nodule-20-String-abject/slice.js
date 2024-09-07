//using slice() to cut a particular section.
const address = "andorkilla";
const part = address.slice(2,5);

console.log(part);

//***split() ==>using convert a string to an array.

const sentence = "I am a good and hardworking person";

console.log(sentence.split("")); //['I', ' ', 'a', 'm', ' ', 'a', ' ', 'g', 'o', 'o', 'd', ' ', 'a', 'n', 'd', ' ', 'h', 'a', 'r', 'd', 'w', 'o', 'r', 'k', 'i', 'n', 'g', ' ', 'p', 'e', 'r', 's', 'o', 'n']

console.log(sentence.split(" ")); //[ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person' ]

console.log(sentence.split("a")); //[ 'I ', 'm ', ' good ', 'nd h', 'rdworking person' ]

const friendsStr = "rahim, karim, jasim";

console.log(friendsStr.split(",")); //[ 'rahim', ' karim', ' jasim' ]

//****Join()==> use for join array element

const friend = [ 'rahim', ' karim', ' jasim' ];

console.log(friend.join(" +"));


