var person = {
  name: "Md.Raysul kobir",
  age: 20,
  mobile: "01760025008",
};

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

var data = Object.entries(person);
console.log(data)

for(var i = 0; i < data.length; i++){
    console.log(data['i'])
}

console.log(person)

var obj2 = Object.assign({}, person);
obj2.msg = 'hello';
console.log(obj2)
console.log(person);
