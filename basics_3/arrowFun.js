const user = {
  username: "samrat",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to webiste`);
  },
};

// user.welcomeMessage();

// user.username = "sdfds";

// console.log(user.username);

//this keyword has two different answers, if used with node it shows empty object and if used in browser it showing window object

// function chai() {
//   console.log(this);
// }

// chai();

// const data = () => {
//   console.log("sdf");
// };

// data();
// if { } used in arrow function use have to use return keyword and if () used no need o write return keyword
