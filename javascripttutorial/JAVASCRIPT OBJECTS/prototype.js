// console.log(typeof(Object.prototype));

// function Person(name) {
//    return this.name = name;
// }

// console.log(Person('John'));

Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}

let p1 = new Person('John');
let greeting = p1.greet();
console.log(greeting);