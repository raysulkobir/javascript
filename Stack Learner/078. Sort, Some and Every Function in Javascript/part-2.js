const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

var result = items.sort((a, b) => b.value - a.value);

console.log(result);


const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);
sorted[0] = 10;
sorted[sorted.length] = 100
sorted[sorted.length] = 200
sorted[sorted.length] = 300
console.log(numbers[0]); // 3

console.log(numbers)
console.log(sorted)
