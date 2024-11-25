/**
 * Write an arrow function where it will do the following:
 * a). It will take an array where the array elements will be the name of your friends.
 * 
 * b) Check if the length of each element is even , push elements with even length to a new array and return the result.
 */

const friends = ["karim", "jarim", "harim", "sakib", "kisore", "asit", "ab"];

const newFriend = (friends) => {
    const newList = [];
    for(const friend of friends){
        if(friend.length % 2 === 0){
            newList.push(friend);
        }
        
    }
    return newList;
} 

const newList = newFriend(friends);
// console.log(newList);


const newFriend2 = friends.filter((f) => f.length % 2 === 0);
console.log(newFriend2);