let rect = {
    width: 100,
    height: 200,

    draw: function(){
        console.log('I am a draw function');
        console.log('width :',  this.width)
        console.log("height :", this.height);
    }
}

rect.draw()