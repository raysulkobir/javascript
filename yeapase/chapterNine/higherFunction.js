//We Can pass a function as a arguments
//we can return a function


function add(a,b){
    return a+b
}

function manipulate(a,b,func){
    var c = a+b//4
    var d = a-b//2

    function multiply(){
        var m = func(c,d)//6
        return c*d*m//4*2*6
    }
    return multiply
}

var multiply = manipulate(3,1,add)
console.log(multiply())