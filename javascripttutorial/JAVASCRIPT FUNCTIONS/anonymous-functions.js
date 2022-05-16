let show = function () {
    console.log("hello");
}


let show1 = () => {
    console.log("hello2");
}

console.log(show()); 


setTimeout(function () {
    console.log("setTimeout")
}, 2000)


// let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// (function () {
//     console.log(person.firstName} + ' ' + person.lastName);
// })(person);


let show22 = () => console.log("Anonymous function");
console.log(show22())

let add = function (a, b) {
  return a + b;
};
console.log(add(10, 20));


let result = (10,5,4 + 20);
console.log(result);