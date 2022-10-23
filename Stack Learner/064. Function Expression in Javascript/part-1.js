var addiTion = function(a, b){
    return a + b;
}

console.log(addiTion(10, 30))

var temp = addiTion;
console.log(temp(20, 30))

setTimeout(() =>{
    console.log('setTimeout')
}, 500)