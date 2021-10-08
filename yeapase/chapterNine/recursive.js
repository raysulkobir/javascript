//Print 10 time Your name without for loop statements 
function yourName(t,name){
    if (t == 0) {
        return 0
    }
    console.log("Your Name is " + name)
    yourName(t - 1,'Yeapes')
}
yourName(10,'Yeapes') 
//sum index to n
function sum(n){
    if (n == 1) {
        return 1
    }

    return n + sum(n - 1)
} 
console.log(sum(5))
//Find Out Factorial Number say 5*4*3*2*1

function factorial(n){
    if (n == 1) {
        return 1
    } 
    return n*factorial(n - 1) 
}
console.log(factorial(6))

//Summation of an array
var arr = [1,2,3,4,5]
function arrSum(arr,lastIndex){
    if (lastIndex < 0) {
        return 0
    }
    return arr[lastIndex] + arrSum(arr, lastIndex - 1)
}
console.log(arrSum(arr, arr.length - 1))