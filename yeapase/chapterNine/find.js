var arr = [1,2,3,4,5]


// var find = arr.find(function(value){
//     return value == 4
// })
// console.log(find)
function myFind(arr,cb){
    for(i = 0; i < arr.length; i++){
        if(cb(arr[i])){
           var result = arr[i]
        }
    }
    return result
}
var find =  myFind(arr,function(value){
 return value == 3
})
console.log(find)