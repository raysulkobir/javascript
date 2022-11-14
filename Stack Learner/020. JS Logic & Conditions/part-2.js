const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// expected output: false



result = '' && 'foo';  // result is assigned "" (empty string)
result = 2 && 0;       // result is assigned 0
result = 'foo' && 4;   // result is assigned 4




function A() {
  console.log('called A');
  return false;
}
function B() {
  console.log('called B');
  return true;
}

console.log(A() && B());



// true || false && false // returns true
// true && (false || false) // returns false
// (2 === 3) || (4 < 0) && (1 === 1) // returns false


a1 = true && true // t && t returns true
a2 = true && false // t && f returns false
a3 = false && true // f && t returns false
a4 = false && (3 === 4) // f && f returns false
a5 = 'Cat' && 'Dog' // t && t returns "Dog"
a6 = false && 'Cat' // f && t returns false
a7 = 'Cat' && false // t && f returns false
a8 = '' && false // f && f returns ""
a9 = false && '' // f && f returns false