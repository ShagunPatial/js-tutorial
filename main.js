// BASIC Vanilla Js

console.log("heello from main.js");
// comment for log

// variable declaration
let age = 25;
console.log(age);

const salary = 8000; // immutable
console.log(salary);

// primitive data types
// strings
const name = "shagun";
const lang = "javascript";
const temp = `temp`;
// integer
const tot = 1000;

//boolean
const isnew = true;

// undefined
let result;
console.log(result);
const res = undefined; //also possible to assign unsigned
// null

const data = null;

// non primitive type : collections of data types
// objects
const pers = {
  fname: "Shagun",
  lname: "Patial",
  age: 23,
};

console.log(pers.fname);

// arrays
const oddnum = [1, 3, 5, 7];
console.log(oddnum[2]);

// javascript is dynamicaly typed language
let a = 20;
a = "temp";
a = true;

// === compares value and datatype
let x = 10;
let y = 10;
console.log(x === y);
console.log(x !== y);
// && , ||, !

console.log("Shagun " + "Patial");
// ?  turnery operator
const isEven = 10 % 2 === 0 ? "even" : "odd";
console.log(isEven);

// Type conversions
// implicit
console.log("\nIMPLICIT TYPE CONVERSIONS:");
console.log(true + "3");
console.log("Bruce" - "Wayne");
console.log("5" - true);
console.log("5" - null);

console.log("5" + "3");
console.log("5" - "3");
console.log("5" * "3");
console.log("5" / "3");
// explicit
console.log("\nEXPLICIT TYPE CONVERSIONS:");
console.log(Number("1"));
console.log(parseInt("5"));
console.log(parseFloat("5"));
console.log(Number(false));
console.log(String(1));
console.log((550).toString());

// Equality
/**
 == -> convert automaticly in same type
 === -> test equality and type also
*/
console.log("\nEquality: ");
const var1 = null;
const var2 = undefined;

console.log(var1 == var2);
console.log(var1 === var2);

const var_1 = "10";
const var_2 = 10;

console.log(var_1 == var_2);
console.log(var_1 === var_2);

// Conditional Statement:
console.log("\nConditional Statements:");
// if Else
num = 1;
if (num > 1) {
  console.log("greater than 1");
} else if (num < 1) {
  console.log("smaller than 1");
} else console.log("equals to one");

// Switch
colr = "red";
switch (colr) {
  case "red":
    console.log("red color");
    break;
  default:
    console.log("Not red");
}

// LOOPS
console.log("\n LOOPS");

// for loop
for (let i = -5; i <= 0; i++) {
  console.log(i);
}

// while and do while loop
let j = 1;
while (j > 5) {
  console.log(j);
  j++;
}

do {
  console.log(j);
  j++;
} while (j < 10);

// for..of loop
let arr1 = [10, 20, 30, 40];
for (const num of arr1) {
  console.log(num);
}

//Functions
console.log("\nFUNCTIONS");

function add(a, b) {
  return a + b;
}

// using fat arrow =>
const arrowsum = (a, b) => {
  return a + b;
};

const arrsum = (a, b) => a + b;
const add5 = (num) => num + 5;
console.log(add(1, 6));
console.log(arrowsum(10, 30));
console.log(add5(65));
