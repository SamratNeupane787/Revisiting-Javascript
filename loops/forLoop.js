//for

// for (let s = 0; s < 10; s++) {
//   const element = s;
//   console.log(s);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(` ${i} * ${j} =${i * j}`);
//   }
//   console.log("\n");
// }

// let myArray = ["flash", "batman", "superman"];
// for (let index = 0; index < myArray.length; index++) {
//   const element = myArray[index];
//   console.log(element);
// }

//break and continue

// for (let index = 0; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`value of i is ${index}`);
//     break;
//   }
//   console.log(`index is : ${index}`);
// }

for (let index = 0; index <= 20; index++) {
  if (index == 5) {
    console.log(`value of i is ${index}`);
    continue;
  }
  console.log(`index is : ${index}`);
}
