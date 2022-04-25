//! Addition operator (+)
let a = 10;
let b = 20;
console.log(a + b);


let c = "10", 
    d = "20";
console.log(Number(c) + Number(d));


let netPrice    = 9.99,
    shippingFee = 1.99;
let grossPrice  = netPrice + shippingFee;
console.log(grossPrice);


//! Subtraction operator (-)

let aa = 10;
let bb = 20;
console.log(aa - bb);

let num1 = "100",
    num2 = "20";
let result = num1 - num2;
    console.log(typeof(result));
    console.log(result);

//! Multiplication operator (*)

let results = num3 = "10", num4 = 2;
console.log(results);
console.log(num3 * num4);


//! Divide operator (/)
let num5 = "10", num6 = 2;
console.log(num5 / num6);


let num7 = 10, num8 = 2;
console.log(num7 / num8);

let energy = {
  valueOf() {
    return 100;
  },
}

console.log(energy / 2);
console.log(energy)


let energy1 = {
  toString() {
    return 50;
  },
};
