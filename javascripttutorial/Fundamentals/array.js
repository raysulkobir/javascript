let arr1 = new Array();
console.log(arr1);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);

let arr3 = Array(1, 2, 3, 4, 5);
console.log(arr3);

let arr4 = ["a", "b", "c"];
console.log(arr4);
console.log(arr4.length);
console.log(arr4[0]);

let arr5 = [1, "b"];
console.log(arr5);
console.log(typeof(arr5));


//! array push
let arr6 = ["red", "green", "blue"];
arr6.push("yellow");
console.log(arr6);


arr6.unshift("black");
console.log(arr6);

arr6.pop("black");
console.log(arr6);

arr6.shift();
console.log(arr6);


arr6.indexOf("green");
console.log(arr6);


//! array splice
console.log(Array.isArray(arr6));

arr7 = arr6.splice(1, 2);
console.log(arr7);

console.log(Array.isArray(arr7));


