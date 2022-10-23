function cal(a, b, func){
    var c = a + b;
    var d = a - b;
    var result = func(c, d);
    return result;
}

function sum(c, d){
    return c + d;
}

var r = cal(6, 3, sum);
console.log(r)

var result2 = cal(6, 3, function(c, d){
    return c - d;
})

console.log(result2)