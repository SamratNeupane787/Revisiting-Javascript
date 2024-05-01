// function loggedInuser(username) {
//   return `${username} succesfully logged In `;
// }

// console.log(loggedInuser()); //if no paramenter given then the username will be undefined ie o/p  will be undefined successfully logged In

// console.log(loggedInuser("samrat")); //samrat succesfully logged in
// console.log(loggedInuser("")); //  sucessfully logged in

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 300, 400, 800)); //200 to val1, 300 to val2 and rest to another

const user = {
  username: "samrat",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

handleObject(user);

const myNewArray = [20, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
