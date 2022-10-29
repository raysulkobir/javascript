let createRect = function(width, height){
    return {
      width: width,
      height: height,

      draw: function () {
        console.log("I am a draw function");
        this.printData();
      },

      printData: function () {
        console.log("width :", this.width);
        console.log("height :", this.height);
        console.log(this);
      },
    };
}

let rect1 = createRect(10, 20); 
rect1.draw()

let rect2 = createRect(10, 200); 
rect2.draw()