let num1 = 10;
let num2 =+ num1;
console.log(num2); 

let num3 = 10;
console.log(num3 ++);
console.log(++ num3);

let f = false;
let t = true;
console.log(f);
console.log(f && t);
console.log(+f);

console.log(f || t);
console.log(+t);
console.log(t)


let person = {
  name: 'John',
  check: function (a, b) {
    return a + b;
  },
};
console.log(person);
console.log(person.name);
console.log(person.check(10, "20"));


let person2 = {
  name: 'John',
  toString: function () {
    return ["Red", "Green", "Blue"].join(" - ");
  },
  valueOf: function () {
    return '30';
  },
};

console.log(person2);
console.log(person2.name);
console.log(person2.toString());


//! Unary minus (-)
let x = 10;
console.log(-x);
console.log(--x);

let age = 30;
-- age;
console.log(age);

let year = 2020;
++ year;
console.log(year);
