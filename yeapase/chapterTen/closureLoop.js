for(var i = 0; i < 5; i++){
    (function(n){
        setTimeout(function(){
            console.log(n)
        },1000 * i)
    })(i)
}