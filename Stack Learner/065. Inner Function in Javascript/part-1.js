function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
    return square(a);
}
const a = addSquares(2, 3); // returns 13
const b = addSquares(3, 4); // returns 25
const c = addSquares(4, 5); // returns 41
console.log(c)
