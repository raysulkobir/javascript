function rectMake(w, h){
    return {
        w: w,
        h: h,

        draw: function(){
            this.printRect()
        },
        printRect:function(){
            console.log(this.w + this.h);
        }
    }
}


var rect = rectMake(40, 50);
rect.printRect()

var rect = rectMake(30, 40);
rect.printRect()