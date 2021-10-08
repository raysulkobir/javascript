//Map Function returns a copy from an array


var arr = [1,2,3,4,5]

// var newArr = arr.map(function(value,index,array){
//     return value
// })
// console.log(arr)
// console.log(newArr)
//Now your write a function that returns  a array copy when you make change it will be return changed value that you provided

function map(arr,cb){
    var newArr = []
    for(i = 0; i < arr.length; i++){
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}
// var newArr = map(arr)
// console.log(newArr)
// console.log(map(arr,function(value){
//     return value
// }))

var qb = map(arr,function (value){
    return value*value*value
})
var sqr = map(arr, function(value){
    return value*value
})
console.log(arr)
console.log(qb)
console.log(sqr)