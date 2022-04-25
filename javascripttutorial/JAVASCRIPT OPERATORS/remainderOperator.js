//! Using the remainder operator with positive dividend example
let remainder = 5 % -2;
console.log(remainder); // 1


remainder = 5 % 2;
console.log(remainder); // 1


//! Using the remainder operator with negative dividend example
let remainder1 = -5 % 3;
console.log(remainder1); // -2

remainder = -5 % -3;
console.log(remainder); // -2  

// Using the remainder operator special values
let num1 = Infinity % 2;
console.log(remainder); // NaN

let num2 = 10 % 0;
console.log(num2); // NaN

console.log(Infinity); // NaN


//! Using the remainder operator to check if a number is an odd number
console.log('modulo:', mod(5, 3)); // 2
