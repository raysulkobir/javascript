function square(x){
    return x * x;
}

let y = 5;
console.log(square(y));


let person = {
  name: 'John',
  age: 25,
};

// function increaseAge(obj){
//     obj.age++;
// }

// increaseAge(person);
// console.log(person);

var des = Object.getOwnPropertyDescriptor(person, 'name');

console.log(des);