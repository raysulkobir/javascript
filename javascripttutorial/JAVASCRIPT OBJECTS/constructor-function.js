// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// let person = new Person('John','Doe');

// console.log(person)

// let person2 = new Person('James','Smith')
// console.log(person2)


// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }
// let person  = new Person('Md.', 'Raysul kobir');
 
// console.log(person.getFullName());
// console.log(person.firstName);




// function Person(firstName, lastName) {
//     if (!new.target) {
//         throw Error("Cannot be called without the new keyword");
//     }

//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// console.log(new Person());


function Person(firstName, lastName) {
    if(!new.target){
       return new Person(firstName, lastName);
    }

    this.firstName = firstName;
    this.lastName = lastName;
 
}

let result =  Person('John', 'Doe');
 
console.log(result.firstName);
