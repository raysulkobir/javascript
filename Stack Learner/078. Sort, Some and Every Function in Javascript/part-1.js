var arr = [
  {
    name: "A",
    age: 15,
  },
  {
    name: "B",
    age: 10,
  },
  {
    name: "C",
    age: 12,
  },
  {
    name: "D",
    age: 20,
  },
];

// console.log(arr)

// arr.sort(function(a, b){
//     if(a.age > b.age){
//         return 1;
//     }else if(a.age < b.age){
//         return -1;
//     }else{
//         return 0
//     }
// });

var data = arr.sort((a, b) => a.age > b.age);
console.log(data)

console.log(arr)



// console.log(arr)



var arr1 = [3, 5, 6, 1, 3, -3, 5, -1];

arr1.sort(function(a, b){
    if(a > b){
        return 1;
    }else if( a < b){
        return -1;
    }else{
        return 0;
    }
}) 

// arr1.sort(function(a, b){
//     if(a < b){
//         return 1;
//     }else if( a > b){
//         return -1;
//     }else{
//         return 0;
//     }
// })


console.log(arr1)




var arr2 = [3, 5, 6, 1, 3, -3, 5, -1];
var arr3 = [4, 6, 3];

var result1 = arr3.every(function(value){
        return value % 2 == 0
});
console.log(result1);


var result2 = arr3.every(function(value){
        return value >= 0
});
console.log(result2);