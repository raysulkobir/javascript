// 1.Pure Function
// 2.First Class Function
// 3.Higher Order Function

// Pure Function--- If returns the same result if given the same arguments
//                 --No Side effects

function sqr(n){
    return n*n
}
console.log(sqr(2))


var a = 10

function test(){
    a = 29
}

test()
console.log(a)