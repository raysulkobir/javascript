function squary(width){
  this.width = width;
}

squary.prototype = {
  draw: function () {
    console.log(this.width);
  },
  toString: function(){
    return 'My name is '+this.width;
  }
};

var sqr1 = new squary(10)
var sqr2 = new squary(20)
console.log(sqr2.toString());