const numbers = [23, 42, 23, 21, 35, 63];

const total = numbers.reduce((previous, current) => previous + current , 0);
console.log(total); //207

const sum = numbers.reduce((p, c) => p + c, 0);
console.log(sum); //207