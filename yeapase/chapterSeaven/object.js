var list = {
    'name':'yeapes',
    'District': 'Noakhali',
    'Upazila': 'Kabirhat',
    'phone': 1203
}
console.log(list)
console.log(list['name'])
delete list.phone
console.log(list)

var obj1 = {
    'a' : 10,
    'b' : 20
}
var obj2 = {
    'a' : 10,
    'b' : 20
}
console.log(JSON.stringify(obj1) == JSON.stringify(obj2))
var obj = {
    name: 'yeapes',
    age: 21,
    phone: 324
}

// console.log('name' in obj)
for(i in obj){
    console.log(obj[i])
}

var list = 
{
    name: 'yeapes',
    roll: 163
}

console.log(Object.keys(list))
console.log(Object.values(list))
var list2 = Object.assign({}, list)
console.log(list2)