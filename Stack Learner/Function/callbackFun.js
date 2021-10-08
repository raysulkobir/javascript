// function main(a, b, cl){
//     var c = a + b;
//     var d = a - b;
//     var result = cl(c, d);
//     return result;
// }



 

// const { valHooks } = require("jquery");

// const { values } = require("lodash");

// function sum(a, b){
//     return a + b;
// }
// var re = main(10, 20, sum);
// console.log(re)

// var check = main(10, 20, function(c, d){
//     console.log(c, d);
// })


// exm -2

// var arr = [1, 2, 30, 4, 5, 6, 7, 8, 9];
// var sum = 0;
// arr.forEach(function(v, i, arr){
//     sum += v;
// })
// console.log(sum);


// exm-3
// var arr = [10, 20, 30, 60, 70];

// var matData = arr.map(function (values){
//    return values * values;
// })
// console.log(arr);
// console.log(matData);

// function myMap(arr, cd){
//    var dataArray = [];
//    for (var i = 0; i < arr.length; i++){
//       var temp = cd(arr[i], arr, dataArray);
//       dataArray.push(temp);
//    }
//    return dataArray;
// }

// var data = myMap(arr, function (a, arr, dataArray){
//    return a * 10 + ' ' + dataArray;
// });
// console.log(data);

// exa-4

// var arr = [2, 3, 5, 6, 7, 8];

// var filterArr = arr.filter(function(value){
//    return value % 2 == 0;
// })
// console.log(filterArr);


// function filterData(arr, cb){
//    var result = [];
//    for (var i = 0; i < arr.length; i++){
//       if (cb(arr[i])){
//          result.push(arr[i]);
//       }
//    }
//    return result;
// }

// console.log(filterData(arr, function(value){
//    return value % 2 != 0;
// }))
 

// exm-5
// var sum = arr.reduce(function(pre, curr, value, index){
//    return pre + curr;
// })
// var mix = arr.reduce(function(pre, curr, value, index){
//    return Math.max(pre, curr);
// })
// var min  = arr.reduce(function(pre, curr){
//    return Math.min(pre, curr);
// })

// console.log(sum);
// console.log(mix);
// console.log(min);

// var arr = [2, 3, 5, 6, 7, 8];
// var myfind = arr.find(function(value){
//    return value == 6;
// })
// console.dir(myfind);

// function myFind(arr){
//    for (var i = 0; i < arr.length; i++){
//       if(cb(arr[i])){
//          return arr;
//       }
//    }
// }

// console.log(myFind(arr, function(value){
//    return value == 5;
// }))

// function helloSay(n){
//    if(n == 0){
//       return;
//    }

//    console.log('hello');
//    helloSay(n - 1);

// }

// helloSay(10);

//! currying

// function sum(a, b, c){
//    console.log(a + b + c);
// }
// console.log(sum(2, 3, 4));

// function sum(a){
//    return function(b){
//       return function(c){
//          return a + b + c;
//       }
//    }
// }
// alert(sum(2)(3)(4));

//! Composition
function Composition(c, d){
   return c + d;
}

function sum(a, b){
   return a + b;
}

function print(fun){
   console.log(fun);
}
print(Composition(sum(5, 10)));

