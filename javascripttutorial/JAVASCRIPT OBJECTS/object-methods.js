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

//     firstName: 'John',
//     lastName: 'Doe'
// };

// person.greet = function () {
//     return "Femal";
//     console.log('Hello!');
// }

// console.log(person.greet());

 


// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     greet: function () {
//         return "I am return function";
//         console.log('Hello, World!');
//     }
// };

// console.log(person.greet());


let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet() {
        return "hello  check";
        console.log('Hello, World!');
    }
};

console.log(person.greet())

