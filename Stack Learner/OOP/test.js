function rectMake(w, h){
    return {
        w: w,
        h: h,

        drow: function() {
            console.log(sum())
        },
        sum: function() {
            return this.w * this.h;
        }
    }
}

var re = rectMake(20, 40)
re.drow();