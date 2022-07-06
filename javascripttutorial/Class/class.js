// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     return this.name;
// };

// var john = new Person("John Doe");

// console.log(john.getName());


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name+" test";
    }
}

let per = new Person("Md.Raysul kobir", 25);
console.log(per)
console.log(per.getName())

console.log(typeof Person)


 