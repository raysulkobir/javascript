// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// console.log(person); // John


// let person = {};
// person.age = 25;
// person.name = 'John';
// console.log(person); // John
// delete person.age;
// console.log(person); // John
// console.log(person.age); // undefined



// let person = {};

// Object.defineProperty(person, 'age', {  // defineProperty() method
//     configurable: false,
//     value: '012-38-9119'

// })

// delete person.age;
// console.log(person.age)


// let person = {};
// person.age = 25;
// person.ssn = '012-38-9119';
// person.dateOfBirth = '01/01/1990';

// console.log(person);

// for(let property in person){
//     console.log(property);
// }

// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// }


// Object.defineProperty(person, 'fullName', { 
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (value) {
//         let parts = value.split(' ');
//         if (parts.length == 2) {
//             this.firstName = parts[0];
//             this.lastName = parts[1];
//         } else {
//             throw 'Invalid name format';
//         }
//     }
// })

// console.log(person.fullName);



// var product = {};

// Object.defineProperties(product,{
//     name: {
//         value: 'Book',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     price: {
//         value: 10,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     description: {
//         value: 'A very good book',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// })

// console.log(product.name);


let person = {
    firstName: 'John',
    lastName: 'Doe'
};


let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');

console.log(descriptor);

 