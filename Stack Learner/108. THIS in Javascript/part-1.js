let rect = {
    width: 100,
    height: 200,

    draw: function(){
        console.log('I am a draw function');
        this.printData();
    },

    printData: function(){
        console.log('width :',  this.width)
        console.log("height :", this.height);
        console.log(this)
    }
    
}

rect.draw()


function myFun(){
    console.log(this);
}

new myFun();