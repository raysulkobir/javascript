var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.reverse());
 

console.log(arr.length / 2)
for(var i = 0; i < arr.length / 2; i++){
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

console.log(arr);


