var arr = [1, 2, 3000, 4, 5];

var sum = arr.reduce(function(prev, curr){
    return prev + curr;
})

console.log(sum);

var max = arr.reduce(function(prev, curr){
    return Math.max(prev, curr);
})

console.log(max);