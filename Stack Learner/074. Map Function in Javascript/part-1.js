var arr = [10, 20, 30, 40, 50, 60];


// var sum = 0;
// var newArray = arr.map((v, i, arr)=>{
//    return v * 2;
// });

// console.dir(arr);
// console.dir(newArray);


function myMap(arr, cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i ++){
        var temp = cb(arr[i], i, arr);
        newArr.push(temp);
    }

    return newArr;
}
 
var newData = myMap(arr, function(v){
    return v * 2;
})

console.log(newData);