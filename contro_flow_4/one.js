// //if

// if (true) {
// } else {
// }

// const balance = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

// if (balance > 500) {
//   console.log("less than ");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else {
//   console.log("less than 1200");
// }

// const userLoggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (userLoggedIn && debitCard) {
//   console.log("allow to buy courses");
// }
// if (loggedInFromEmail || loggedInFromGoogle) {
//   console.log("Logged in");
// }

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10;//5
// val1 = null ?? 10;//10

val1 = undefined ?? 15;
console.log(val1);

//Terniary operatior

// condition ? true : false;

const iceTeaPrice = 100;

iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");
