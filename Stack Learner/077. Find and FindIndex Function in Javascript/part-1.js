var arr = [1, 2, 3, 4, 5, 6, 7];

// var result = arr.find(function(v){
//    return v === 3;
// })
// console.log(result);


// var result1 = arr.findIndex(function(v){
//     return v === 3;
// });
// console.log(result1);


function myFind(arr, cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            return arr[i];
        }
    }
}

var result = myFind(arr, function(n){
   return n == 1;
});
console.log(result);