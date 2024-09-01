const friends = ['balam', 'kalam', 'palam', 'dilam', 'nilam'];

console.log(friends.includes('dilam')); //true

console.log(friends.includes('bujhlam')); //false

if( friends.includes('kalam')) {
    console.log("let's do party.");
}
else {
    console.log("no food , we are fasting.");
}