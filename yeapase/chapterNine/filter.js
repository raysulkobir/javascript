var arr = [1,2,3,4,5]

// var even = arr.filter(function(value){
//     return value % 2 == 1
// })

// console.log(even)



function myFilter(arr,cb){
    var newArr = []
    for(i = 0; i < arr.length; i++){ 
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i])
        }
        
    }
    return newArr
}

// console.log(myFilter(arr))
console.log(myFilter(arr,function(value){
    return true
}))