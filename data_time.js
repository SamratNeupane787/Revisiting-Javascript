let myDate = new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate); //interview important object

let myCreatedate = new Date(2023, 0, 23);
console.log(myCreatedate.toDateString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
});
