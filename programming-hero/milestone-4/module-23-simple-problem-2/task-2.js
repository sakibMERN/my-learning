/***
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

const friends = ['rahim', 'robin','ab', 'rafi', 'ron', 'rashed'];

function minCharacter(friends){
    let min = friends[0];
    for(const friend of friends){
        if(min.length > friend.length){
            min = friend;
        }
    }
    return `The low character name friend is: ${min}`;
}

const minName = minCharacter(friends);
console.log(minName);
