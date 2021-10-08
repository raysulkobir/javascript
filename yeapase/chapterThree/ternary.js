var a = 10

var result = a % 2 == 0 ? 'Even': 'Odd'
console.log(result)

// Short Hand OR AND

var name = ''
var fullname = name || 'MD. Yeapas' //if false first condition  then go for second side

console.log(fullname)

var isOkay = false
isOkay && console.log("Everything is okay")