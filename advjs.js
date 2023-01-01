// ADVANCE JS
// lexical scope or Nested scope

console.log("NESTED SCOPE: ");
let a = 10;
function out() {
  let b = 20;
  function inn() {
    let c = 30;
    console.log(a, b, c);
  }
  inn();
}
out();

// CLOSURES : Function returning with lexical scope

console.log("\n CLOSURES");
function outer() {
  let count = 0;
  function inner() {
    ++count;
    console.log(count);
  }
  return inner;
}
const func = outer();
func();
func();

/**
 * Function Currying:
 * suppose a function having multiple args func(a,b,c)
 * then we have to convert this fucntion to take one arg. at a time.
 * so, func(a,b,c) ==>> func(a)(b)(c)
 */
console.log("\n Function CURRYING");
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));

function curr(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}
// lets currying the sum function
const curriedSum = curr(sum);
console.log(curriedSum(10)(20)(30));
// or

const add10 = curriedSum(10);
const add20 = add10(20);
const ad30 = add20(30);
console.log(ad30);

/**
 * This keyword:
 *
 * types with order of precendence
 * 1. New Binding
 * 2. Explicit binding
 * 3. Implicit binding
 * 4. Default Binding
 */

console.log("\nThis Keywrd:");

// implicit binding
const person = {
  name: "Shagun Patial",
  saymyname: function () {
    console.log(`my name is ${this.name}`);
  },
};
person.saymyname();

// explicit binding
function saymyname() {
  console.log(`my name is ${this.name}`);
}

saymyname.call(person);

// new binding
function Person(name) {
  this.name = name;
}
const p1 = new Person("Shaggy");
const p2 = new Person("Shag1");

console.log(p1.name, p2.name);

// defualt binding

saymyname(); // by default undefined
globalThis.name = "Supername"; // global initialize
saymyname();

// Prototype
console.log("\n Prototype:");

function People(fname, lname) {
  this.firstname = fname;
  this.lastname = lname;
}

People.prototype.getfullname = function () {
  return this.firstname + " " + this.lastname;
};

const peop1 = new People("Shaun", "Michael");
const peop2 = new People("Bruce", "Wayne");
console.log(peop1.getfullname());
console.log(peop2.getfullname());

//Prototype inheritance
console.log("\n Prototype Inheritance:");

function Superhero(fname, lname) {
  People.call(this, fname, lname);
  this.isSuperhero = true;
}
Superhero.prototype = Object.create(People.prototype);
Superhero.prototype.fightcrime = function () {
  return "Fighting !!!";
};
Superhero.prototype = Object.create(People.prototype);
Superhero.prototype.constructor = Superhero;
const batman = new Superhero("Bruce", "Wayne");

console.log(batman.getfullname());
//console.log(batman.fightcrime());

// CLASS

console.log("\n Class:");

class Human {
  constructor(fnme, lnme) {
    this.firstname = fnme;
    this.lastname = lnme;
  }

  sayname() {
    return this.firstname + "" + this.lastname;
  }
}

class SuperHuman extends Human {
  constructor(fname, lname) {
    super(fname, lname);
    this.is_superhuman = true;
  }
  fightCrime() {
    console.log("Fighting crime !!!!!");
  }
}

let superman = new SuperHuman("Tim", "cook");
superman.fightCrime();
console.log(superman.sayname());
