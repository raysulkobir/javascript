//if we can sum from a function we use the currying pattern


function sum(a){
    return function sumTwo(b){
    return function sumThree(c){
            return a+b+c
        }
    }

}
var result = sum(10)(10)(10)
console.log(result) 
 