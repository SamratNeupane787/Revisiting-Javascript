const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  myNumbers.map((item) => {
    return item + 10;
  })
);

const newNum = [];

myNumbers.forEach((item) => {
  return newNum.push(item + 10);
});

const newNums = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 15);

console.log(newNums);
