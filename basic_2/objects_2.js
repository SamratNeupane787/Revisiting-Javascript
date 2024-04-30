const tinderUser = new Object();

// tinderUser.id = "123abc";
// tinderUser.name = "Samy";
// tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstName: "samrat",
      lastname: "neupane",
    },
  },
};

// console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "a",
  4: "b",
};

const obj4 = {
  5: "a",
  6: "b",
};
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2, ...obj4 };

console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
