const user = {
  username: "Samrat",
  loginCount: 8,
  signedIn: true,

  getuserDetails: function () {
    console.log(`Got user details from database :${this.username}`);
  },
};

console.log(user.loginCount);
console.log(user.getuserDetails());

// const promiseOne = new Promise();
// const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this; //by default return this if not done return it iwll still get the output
}

const userOne = new User("Samrat", 8, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);
