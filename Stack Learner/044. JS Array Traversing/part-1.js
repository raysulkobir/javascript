var number = [1, 2, 3];
console.log(number);

for (i = 0; i < number.length; i++) {
  console.log((number[i] = number[i] + 5));
}

number.map((v, i) => {
  console.log(v + 3);
});
