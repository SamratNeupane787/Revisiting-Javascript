const myNums = [1, 2, 3];
const initialValues = 0;

const myTotal = myNums.reduce((acc, curVal) => {
  console.log(`acc :${acc} and currentvalue :${curVal}`);
  return acc + curVal;
}, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 999,
  },
  {
    itemName: "python course",
    price: 599,
  },
  {
    itemName: "Rust course",
    price: 299,
  },
  {
    itemName: "React Native course",
    price: 999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(totalPrice);
