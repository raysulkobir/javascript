
// var sum = arr.reduce(function(prev,curr){
//     return prev + curr
// })
// console.log(sum)


var arr = [1,2,3,4,5]

function myReduce(arr,cb,acc){
    for(i = 0; i < arr.length; i++){
        var acc = cb(acc,arr[i])
    }
    return acc
}
var mysum = myReduce(arr,function(prev,curr){
    return prev + curr
},0)
console.log(mysum)
var max = myReduce(arr,function(prev,curr){
    return Math.max(prev,curr)
},0)
console.log(max)