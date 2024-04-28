const myArr = [0, 1, 2, 3, 4, 5];
// console.log(myArr[0]);
// const myarra = new Array(1, 2, 3, 4, 5);

// //Array methods
// myArr.push(6);
// console.log(myArr);
// myarra.pop(); ///remove last value

// // myArr.unshift(9);/// adds 9 to firt postition
// myArr.shift(); //remove first element
// console.log(myArr);

// const newarray = myArr.join(); // join operation binds the array and changes it into string

// console.log(newarray);
// console.log(typeof newarray);

//slice , splice

console.log("A ", myArr); //A  [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1, 3);
console.log(myn1); //[ 1, 2 ]
console.log("B ", myArr); //B  [ 0, 1, 2, 3, 4, 5 ]
const myn2 = myArr.splice(1, 2);
console.log("C", myn2);

//slice works between the range where as splice seperates from the given range
