// function Person(firstName, lastName) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// }

// console.log(new Person);


// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// let p1 = new Person("John", "Doe");
// let p2 = new Person("Jane", "Doe");

// console.log(p1.getFullName());
// console.log(p2.getFullName());


// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Person.prototype.getFullName = function () {
//   return this.firstName + ' ' + this.lastName;
// };

// let p1 = new Person('John', 'Doe');
// let p2 = new Person('Jane', 'Doe');

// console.log(p1.getFullName());
// console.log(p2.getFullName());
// console.log(new Person)

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}

let per1 = new Person('John', 'Doe');
console.log(per1)