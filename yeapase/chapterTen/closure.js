//when a function remember and use lexical scope
//uses outside of lexical scope


function sayhi(){
    var msg = 'Hello i am learning lexcal scope'

    return function(){
        console.log(msg)
    }
} 

console.log(msg);
var msg = sayhi()
console.log("hello ddf");