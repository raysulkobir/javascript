function add(a, b){
    return a+b;
}

function manipulation(a, b, func){
    var c = a + b;
    var d = a - b;

    function multiply(){
        var m = func(a, b);
        return c*d*m;
    }

   return multiply();

    // return function(){
    //      var m = func(a, b);
    //      return c * d * m;
    // }
}

var m = manipulation(10, 20, add);
console.log(m)