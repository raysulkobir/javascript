var a = 'hello';

console.log(a);

function x(){
    // var a = 30;
    function y(){
        var a = 10;
        console.log(a)
    }
    y();
}
x();