var date = new Date();
console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())
console.log(date.toISOString())


console.log(date.getDate())
console.log(date.getDay())
console.log(date.getHours())
console.log(date.getFullYear())
console.log(date.getSeconds())


var today = new Date();
var tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.toLocaleDateString());

console.log(new Date(Date.now() + 2400000));

var date = new Date();
// add 1 day
var d = date.setDate(date.getDate() + 1)
console.log(d)
