let a = 10, b = 20;

let obj = {
    a,
    b
}

console.log(obj)



let obj2 = {
  a,
  b,
  print(){
    console.log(this)
  }
};

obj2.print();