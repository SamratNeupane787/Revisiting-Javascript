const marvel_heros = ["thor", "flash", "spiderman"];
const dc_heros = ["batman", "superman"];

// marvel_heros.push(dc_heros); //push adds array inside array it does not create new array

// console.log(marvel_heros);

// const allheros = marvel_heros.concat(dc_heros); //[ 'thor', 'flash', 'spiderman', 'batman', 'superman' ]
// console.log(allheros); //concat creates the new array

const all_new_heros = [...marvel_heros, ...dc_heros]; //same as concate operates creates new array
console.log(all_new_heros);

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //creates array of variables [100,200,300]
