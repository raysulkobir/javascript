let empty = {}
console.log(empty)

let person = {
    name: 'John',
    age: 30,
    roll: 1235
}
console.log(person)
console.log(person.name)

console.log(person['name'])
// console.log(person.'name')

console.log(person.name)
person.name = 'John2'
console.log(person.name)


let employee = {
    firstName: 'Peter',
    lastName: 'Doe',
    employeeId: 1
};
console.log("ssn" in employee)
console.log("lastName" in employee)


let person1 = {
    name: 'John',
    age: 30,
    roll: 1235
}

console.log(person1);
console.log(person1.name="Md.Raysul kobir")
console.log(person1);

let data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Peter'},
    {id: 3, name: 'Jane'},
];

console.log(data);
data[2].name = 'Jane2';
console.log(data);

