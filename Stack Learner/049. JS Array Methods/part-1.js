var arr = [1, 2, 3, 4, 5, 6];
console.log(arr)
console.log(arr.join('|'))

var address = [
   'Dewangonj',
   'jamalpur'
];

console.log(address[0])
console.log(address.join())


var color = ['red', 'green', 'yellow'];
console.log(color.concat(arr))


var x = [1, 2];
var y = Array.from(x);
y[0] = 10;
console.log(x)
console.log(y);
console.log(y)