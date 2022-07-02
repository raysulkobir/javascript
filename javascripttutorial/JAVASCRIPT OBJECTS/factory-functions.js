// let person1 = {
//   firstName: "John",
//   lastName: "Doe",
//   getFullName() {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log("person1", person1.getFullName());


// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     getFullName() {
//       return firstName + " " + lastName;
//     },
//   };
// }


// let person1 = createPerson("John", "Doe");
// let person2 = createPerson("Jane", "kobir");

// console.log(person1.getFullName());
// console.log(person2.getFullName());


function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

console.log(createPerson("Md.Raysul kobir", "jamal"))