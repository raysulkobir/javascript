// function person(name, age) {
//     let data = {}
//     data.name = name;
//     data.age = age;
//     return data;
// }
// let p = person('kamal', 20);
// console.log(p.name)


function person(name, age) {
    let data = {}
    data = Object.create(person.prototype)
    data.name = name;
    data.age = age;
    return data;
   
   

}
person.prototype = {
    test(){
        return 'hello';
    },
    eat(){
        return 'hello I am eating';
    }
}

// let p = new person('jamla', 15);
let p = person('jamla', 15);
console.log(p.eat())