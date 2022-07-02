let person = {
  firstName: "John",
  lastName: "Doe",
};

// let firstName = person.firstName;
// console.log(firstName)


let { firstName: fname, lastName: lname } = person;
console.log(person.fname)
console.log(person)

