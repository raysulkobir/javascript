let createRect = function(width, height){
      this.width = width,
      this.height = height,

      this.draw = function () {
        console.log("I am a draw function");
        this.printData();
      },

      this.printData = function () {
        console.log("width :", this.width);
        console.log("height :", this.height);
        console.log(this);
      }
}

let rect1 = new createRect(10, 20); 
rect1.draw()

let rect2 = new createRect(10, 200); 
rect2.draw()