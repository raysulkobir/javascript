var rect = function(w, h){
    this.w = w;
    this.h = h;
    this.sum = function(){
       console.log(this.w * this.h)
    }
}

var r = new rect(10, 20);
r.sum()