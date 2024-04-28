// methods to define string
const name = "Samrat";

//another method
const firstName = new String("Samrat Neupane");
console.log(firstName[0]); //S
console.log(firstName.length); //14
console.log(firstName.charAt(2)); //m
console.log(firstName.indexOf("t")); //5

const newString = firstName.substring(0, 4);
console.log(newString); //samr

const newStringOne = firstName.slice(1, 4);
console.log(newStringOne); //amr

const newStringg = "   samrat  ";

console.log(newStringg.trim()); //removes the whitespace in front and last

const url = "https://samratneupane/samrat%20sam";

console.log(url.replace("%20", "-")); //https://samratneupane/samrat-sam

const data = new String("How are you buddy!");
console.log(data.split(" ")); //[ 'How', 'are', 'you', 'buddy!' ]
