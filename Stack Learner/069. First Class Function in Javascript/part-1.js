function add(a, b){
    return a+b;
}

var sum = add;
console.log(sum(10, 20));

// function set in array 
var arrFun = [];
arrFun.push(add);
console.log(arrFun[0](2, 3))

// function set in obj 
var obj = {
    sum: add
}

console.log(obj.sum(3, 4));

setTimeout(() => {
    console.log('set function')
}, 500)
