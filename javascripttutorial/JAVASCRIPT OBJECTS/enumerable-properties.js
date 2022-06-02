const person = {
  fName: "Md.Raysul",
  lName: "Kobir",
};

person.age = 25;

console.log(person);

for (const key in person) {
  console.log(person[key]);
}

Object.defineProperty(person, "ssn", {
  enumerable: false,
  value: "123-456-7890",
});

for (const key in person) {
  console.log(key);
}

Object.defineProperty(person, "ssn", {
  enumerable: false,
  value: "123-456-7890",
});

console.log(person.propertyIsEnumerable("firstName"));
