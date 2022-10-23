// var a = 10;

// function x(){
//     var a = 20;
//     console.log(a)
//     function y(){
//         var a = 30;
//         console.log(a)
//     }
//     y();
// }

// x();

// console.log(a)


function test(n){

    function a(){
        return n % 3 == 0;
    }

    function b(){
        return n % 5 == 0;
    }

    if(a()  && b()){
        console.log(true);
    }else{
        console.log(false);
    }
}

test(20)