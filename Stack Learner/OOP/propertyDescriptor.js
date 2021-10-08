var person = {
    name: 'kamal'
}
 
Object.defineProperty(person, 'name', {
    writable: false,
    value: 'test'
})
// Object.defineProperty(person, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })
person.name = 'jamal';
var pro = Object.getOwnPropertyDescriptor(person, 'name');

// console.log(person.name)
console.dir(pro)

// var besObjec = Object.getPrototypeOf(person);
// var descript = Object.getOwnPropertyDescriptor(besObjec, 'toString')
// console.dir(descript);

