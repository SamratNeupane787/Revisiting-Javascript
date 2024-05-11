// const promiseOne = new Promise(function (resolve, reject) {
//   //DO an async task
//   //DB calls, cryptography

//   setTimeout(() => {
//     console.log("async task completer");
//     resolve(0);
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Task two");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Second task completed!");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       username: "samrat",
//       email: "samr@example.com",
//     });
//   }, 1000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

// const promisefour = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "samrat",
//         password: "123",
//       });
//     } else reject("ERROR: Something went wrong");
//   }, 1000);
// });

// promisefour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("The promise is done!!!");
//   });

// const promisFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({
//         username: "javascript",
//         password: "1234",
//       });
//     } else reject("ERROR: JS went wrong");
//   }, 1000);
// });

// async function consumedPromisFive() {
//   try {
//     const response = await promisFive;
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumedPromisFive();

// async function getAllusers() {
//   try {
//     const resposne = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     const apidata = await resposne.json();
//     console.log(apidata);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllusers();

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => {
    return response.json();
  })
  .then((apidatafin) => {
    console.log(apidatafin);
  })
  .catch(() => {
    console.log("error deteced!");
  })
  .finally(() => {
    console.log("Time completed!");
  });
