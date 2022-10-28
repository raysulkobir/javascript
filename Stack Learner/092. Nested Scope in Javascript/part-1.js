var aa = 10;
function a(){
    var bb = 20;
    function b(){
        var c = 30;
        console.log(aa);
    }
    b();
    console.log(c);
}
console.log(a)

a();