function SetUserName(username) {
  //DB CALLS
  this.username = username;
  console.log("Called !");
}

function createUser(username, email, password) {
  SetUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@ff.com", "123");

console.log(chai);
