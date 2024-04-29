//singleton

//object literals

const mySym = Symbol("key1");

const JsUsers = {
  name: "Samrat",
  age: 21,
  [mySym]: "mykey1",
  location: "kathmandu",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Monday"],
};

console.log(JsUsers.name); //
console.log(JsUsers["location"]);

console.log(JsUsers[mySym]);
//to access the symbols in the object we use the [] brackets

JsUsers.location = "dang"; //to change the data inside object
// Object.freeze(JsUsers); ///NO changes to the object

JsUsers.location = "pokhara";

console.log(JsUsers);

JsUsers.greeting = function () {
  console.log("hello to the users!");
};

console.log(JsUsers.greeting());
