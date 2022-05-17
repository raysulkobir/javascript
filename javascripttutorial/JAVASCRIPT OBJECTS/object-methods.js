// let person = {
//   firstName: "John",
//   lastName: "Doe",
// };

// person.greet = function () {
//   console.log("Hello!");
// };

// person.greet();
// console.log(person);


let person = {
  firstName: "John",
  lastName: "Doe",
};

function greet() {
  console.log("Hello, World!");
}

person.greet = greet;
person.greet();