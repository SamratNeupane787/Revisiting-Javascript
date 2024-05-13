const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

const chai = {
  name: "GingerChai",
  price: "250",
  isAvailable: true,
  orderChai: function () {
    console.log("404 Error!");
  },
};

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} :${value}`);
  }
}
//enumerable :false -- not able to loop

const desc = Object.getOwnPropertyDescriptor(Math, "PI");

desc.writable == true;

console.log(desc);
