// const score = 400;
// console.log(score);
// const balance = new Number(100);
// console.log(balance);

// console.log(balance.toFixed(1)); //100.0

// const data = 100000000;

// console.log(data.toLocaleString("en-IN")); //10,00,00,000

//+++++++++++MATHS++++++++++++++

console.log(Math);

console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.ceil(4.6)); //5
console.log(Math.min(4, 6, 72, 2, 1)); //1
console.log(Math.max(4, 6, 72, 2, 1)); //72

console.log(Math.random()); //always 0-1 values
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.random(Math.random() * (max - min + 1)) + min);
