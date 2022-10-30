function myFun(c, d){
  console.log(this.a, this.b)
}


myFun.call({a: 10, b: 500}, 100, 200)
myFun.apply({a: 2, b: 3}, 600, 700)