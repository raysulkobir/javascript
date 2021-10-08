//! pieor function

// function test(a, b){
//     return a + b;
// }

// console.log(test(10, 20));
// console.log(test(10, 60));
// console.log(test(10, 80));

// var n = 100;
// function fun1() {
//     var n = 10;
//     return n;
// }
// console.log(fun1());
// console.log(fun1());
// console.log(n);

// var print = {
//     x: 10,
//     y: 20
// }

// function fun2(print){
//     print.x  = 100;
//     print.y  = 200;
//     console.log(print);
// }

// console.log(fun2(print))


function sum(a, b){
    return a + b;
}
 
function menipulation(a, b, add){
 
    var a = 10;
    var b = 30;
    function allSum(){
        var s = add(a, b);
        return a * b * s;
    }
    allSum();
}

console.log(menipulation(10, 20, sum))