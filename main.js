// log a statement using console.log()
// console.log("Hello from main.js");

// Variables

// let age = 25;
// age = 27;
// console.log(age);

// const sal = 30000;
// console.log(sal);

// Datatypes

// const name = "Ravi";
// const city = "Nagpur";
// const country = "India";

// const total = 0;
// const PI = 3.14;

// const isPrimaryNumber = true;
// const isNewUser = false;

// let result;
// console.log(result);

// const res = undefined;

// const data = null;

// const person = {
//   firstName: "Ravi",
//   lastName: "Prasad",
//   age: 27,
// };

// console.log(person);

// const oddNumbers = [1, 3, 5, 7, 9];

// console.log(oddNumbers[1]);

// Operator

// let x = 10;
// let y = 20;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x % y);
// console.log(++x);
// console.log(--y);

// console.log(x == y);
// console.log(x === y);
// console.log(x !== y);
// console.log(x > y);
// console.log(x <= y);

// const isValidNumber = x > 8 && y < 23;
// console.log(isValidNumber);

// const isValidNumber2 = x > 20 || y < 23;
// console.log(isValidNumber2);

// const isValid = true;
// console.log(!isValid);

// console.log(`Ravi` + `Prasad`);

// const isEven = 10 % 2 === 0 ? true : false;
// console.log(isEven);

// Type Conversion

// Implicit Conversion

// console.log(2 + `3`);
// console.log(true + 3);
// console.log(true + `3`);
// console.log(`4` - `2`);
// console.log(`Ravi` - `Prasad`);
// console.log(5 + undefined);

// Explicit Conversion

// console.log(Number(`5`));
// console.log(Number(false));
// console.log(Number(``));
// console.log(parseInt(`5`));
// console.log(parseFloat(`3.14`));
// console.log(String(50));
// console.log(String(true));
// console.log(String(undefined));
// console.log((500).toString());
// console.log(Boolean(10));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(``));
// console.log(Boolean(NaN));

// Equality

// const var1 = 10;
// const var2 = `10`;

// console.log(var1 == var2);
// console.log(var1 === var2);

// const var3 = 0;
// const var4 = ``;

// console.log(var3 == var4);
// console.log(var3 === var4);

// const var5 = false;
// const var6 = ``;

// console.log(var5 == var6);
// console.log(var5 === var6);

// const var7 = null;
// const var8 = undefined;

// console.log(var7 == var8);
// console.log(var7 === var8);

// Conditional Statement

// const num = 5;

// if (num > 0) {
//   console.log(`Number is Positive`);
// } else if (num < 0) {
//   console.log(`Number is negative`);
// } else {
//   console.log(`Number is zero`);
// }

// const color = 10;

// switch (color) {
//   case `red`:
//     console.log(`Color is red`);
//     break;

//   case `blue`:
//     console.log(`Color is blue`);
//     break;

//   case `black`:
//     console.log(`Color is black`);
//     break;

//   default:
//     console.log(`Not a valid color`);
// }

// Looping Code

// for (let i = 1; i <= 5; i++) {
//   console.log(`Itteration number` + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log(`Itteration number` + i);
//   i++;
// }

// let i = 6;
// do {
//   console.log(`Itteration number` + i);
//   i++;
// } while (i <= 5);

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log(`Itteration number ` + num);
// }

//  Functions

// function greet(username) {
//   console.log(`Good morning ` + username);
// }

// greet(`Ravi`);
// greet(`Prasad`);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(25, 25);
// console.log(sum);

// const arrowSum = (a, b) => {
//   return a + b;
// };

// const sum1 = arrowSum(20, 20);
// console.log(sum1);

// Scope

const myNum = 100;

if (true) {
  const myName = `Ravi`;
  console.log(myName);
  console.log(myNum);
}

function testFn() {
  const myName = `Prasad`;
  console.log(myName);
  console.log(myNum);
}

testFn();
