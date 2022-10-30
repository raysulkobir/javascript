var Rect = function(width, height){
  this.width = width;
  this.height = height;

  var position = {
    a: 56,
    b: 20
  }

  var printPosition = function(){
    console.log('my width ' + this.width)
    console.log('my height ' + this.height);
  }.bind(this)

  this.draw = function(){
    console.log('I am rect');

    printPosition();

    console.log("position", position.a, position.b);
  }

  Object.defineProperty(this, 'position', {
    get: function(){
      return position;
    },
    set: function(value){
      position = value;
    }
  })

}

var rect7 = new Rect(10, 20);

rect7.draw();

rect7.position = {
  a: 520,
  b: 85120,
}
console.log(rect7.position);
console.log(rect7.position);
console.log(rect7.position);