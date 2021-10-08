// var obj = {};
// obj.x = 10;
// obj.y = 100;
// console.log(obj);

// var point = {
//     x: 10,
//     y: 20,
//     z: 30,
// }

// var show = 'y';
// console.log(point[show]);


// var point = {
//     x: 10,
//     y: 20,
//     z: 30
// }

// point.t = 50;
// point.y = 200
// show = 'y';

// console.log(point[show]);

// var point = {
//     x: 10,
//     y: 20,
//     z: 30
// }

// delete point.y;
// console.log(point);

// compier

// var obj1 = {
//     x: 10,
//     y: 20,
// }
// var obj2 = {
//     x: 10,
//     y: 20,
// }

// console.log(obj1 == obj2)

// if(obj1.a == obj2.a && obj1.b === obj2.b){
//     console.log(true)
// }

// console.log(JSON.stringify(obj2) == JSON.stringify(obj2))

// var ojb = {
//     x: 10, 
//     y: 20,
//     z: 30
// }

// console.log('x' in ojb);

// for(i in ojb){
//     console.log(i+ ': '+ ojb[i]);
// }


var obj = {
    x: 100,
    y: 200,
    z: 300,
}


console.log(obj);
console.log(Object.keys(obj))
console.log(Object.values(obj))
var obj2 = Object.assign({}, obj);
obj2.t = 500;
console.log(obj2);

