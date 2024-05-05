//for of
const arry = [1, 2, 3, 4, 5];
for (const num of arry) {
  console.log(num);
}

const greetings = "Hello world!";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United states");
map.set("Fr", " France");

for (const [key, value] of map) {
  console.log(key, " : ", value);
}

for (const key in map) {
  //doesnot work for map for in loop
  console.log(key);
}
