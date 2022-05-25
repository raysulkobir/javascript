// var person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     ssn: '299-24-2351'
// };

// console.log(person);


// for(var prop in person) {
//     // console.log(prop + ':' + person[prop]);
//     console.log(person[prop]);
// }


// var decoration = {
//     color: 'red'
// };

// var circle = Object.create(decoration);
// circle.radius = 10;


// for(const prop in circle) {
//     console.log(prop);
// }


const items = [10 , 20, 30];
let total = 0;

for(const item in items) {
    total += items[item];
}
console.log(total); 
