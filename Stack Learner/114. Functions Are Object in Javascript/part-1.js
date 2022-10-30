

// let createRect = function(width, height){
//       this.width = width,
//       this.height = height,

//       this.draw = function () {
//         console.log("I am a draw function");
//         this.printData();
//       },

//       this.printData = function () {
//         console.log("width :", this.width);
//         console.log("height :", this.height);
//         console.log(this);
//       }
// }



function test(){
    console.log('hello')
}

console.log(test.length, test.name)

var Rect = new Function(
  "width",
  "height",
  `this.width = width,
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
      `
);

var rect = new Rect(4, 5);

