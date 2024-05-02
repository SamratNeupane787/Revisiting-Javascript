// if (true) {
//   let a = 10;
//   const b = 20;
// }

// console.log(a);
// console.log(b);
function one() {
  const username = "samrat";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  // console.log(website);

  two();
}

one();

if (true) {
  const username = "samrat";
  if (username == "samrat") {
    const wbeiste = "yotube";
    console.log(username + wbeiste);
  }

  // console.log(wbeiste);
}
// console.log(username);

//++++++++++++ interesting++++
console.log(addone(4));
function addone(num) {
  return num + 1;
}
console.log(addTwo(5));
const addTwo = function (num) {
  return num + 2;
}; //hoisting is the problem when a fucntion is tried to acces before function is exectuted and the functon is kept in the form of varaiable like const addTwo = function()
