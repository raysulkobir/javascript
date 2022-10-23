var arr1 = [1, 2, 4, 5];
var arr2 = [5, 6, 7, 8, 10];

// var sum = 0;
// for(var i = 0; i < arr1.length; i++){
//     sum += arr1[i]
// }

function sumArrayOf(arr){
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    console.log(sum);
}

sumArrayOf(arr1);
sumArrayOf(arr2);