var arr = [10, 21, 30, 40, 50, 60];

// var newFilter = arr.filter((v, i, arr) => {
//     return v % 2 == 0;
// });

// console.log(newFilter);


function myFilter(arr, cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(myFilter(arr, function(v){
    return v % 2 == 0
}))
console.log(myFilter(arr, function(v){
    return v % 2 !== 0
}))