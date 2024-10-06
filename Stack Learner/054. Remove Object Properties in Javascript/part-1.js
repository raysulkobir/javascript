var number = {
    a: 10,
    b: 20,
    c: 30
}

console.log(number);
delete number.a;
console.log(number);


//TODO Using Destructuring with the Rest Operator
const { b, ...personWithoutAge } = number;
console.log(personWithoutAge)