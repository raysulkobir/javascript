//A Function Can be stored in a variable
function add(a,b){
    return a+b
}
var sum = add
console.log(sum)
//A Function Can be stored in an array
var arr = []
arr.push(sum)
console.log(arr[0])
//A Function Can be stored in an object

var obj = {
    sum: add
}
console.log(obj['sum'])
//We Can Create Function as need
setTimeout(function(){
    console.log("I om ripon video")
},100)