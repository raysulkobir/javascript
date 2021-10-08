var rect = {
    w: 40,
    h: 60,

    draw: function(){
       console.log('I am rect'+this.w)
    }
}

rect.draw()
console.log(rect.w)

rect.w = 200;
console.log(rect.w)