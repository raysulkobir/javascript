// function Person(name) {
//     if (!new.target) {
//        return( "must use new operator with Person");
//     }
//     this.name = name;
// }

// let p =  Person("Md. Shafiqul Islam");
// console.log(p);



//* JavaScript new.target in constructors
class Person {
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let john = new Person('John Doe'); // Person
let lily = new Employee('Lily Bush', 'Programmer'); // Employee

