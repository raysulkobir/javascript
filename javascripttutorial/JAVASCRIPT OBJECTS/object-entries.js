
// const ssn = Symbol('ssn');
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    // [ssn]: '123-345-789'
};

console.log(Object.entries(person));
const ssn = Symbol("ssn");

console.log(ssn);   

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  [ssn]: "123-345-789",
};

const kv = Object.entries(person);

console.log(kv);
