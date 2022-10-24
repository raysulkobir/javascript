var arr = [10, 20, 30, 40, 50, 60];

// var sum = 0;
// arr.forEach(function(v, i, a){
//     sum += v;
//     console.log(v, i, a)
// })
// console.log(sum)


function forEach(arr, cb){
    for(var i = 0; i < arr.length; i++){
        cb(arr[i], i, arr);
    }
}


var sum = 0;
forEach(arr, function(value, index, arr){
    console.log(value, index, arr);
})