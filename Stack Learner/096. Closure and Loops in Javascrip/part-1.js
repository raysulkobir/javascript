for(var i = 0; i < 6; i++){
    (function(n){
        setTimeout(() => {
          console.log(n);
        }, 3000);
    })(i)
}