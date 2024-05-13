//ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encyptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("sam", "sam@gmail.com", "123");
// console.log(chai.encyptPassword());
// console.log(chai.changeUserName());

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encyptPassword = function () {
  return `${this.password}abc`;
};

const tea = new User("cha", "cha@gmail.com", "124");
console.log(tea.encyptPassword());
