//add function

//Summation from a arrray

var arr1 = [10,20,30]
var arr2 = [34,54,56]
sum = 0
function add(arr){
    for(var i = 0; i < arr.length; i++){
        sum +=arr[i]
    }
    console.log(sum)
}

add(arr1)
add(arr2)