var n = 5;

function myChange(n) {
  n = n + 105;
  console.log(n);
}

myChange(n);
console.log(n);


var obj = {
  a: 10,
  b: 20
}


function myChangeObj(obj){
  obj.a = obj.a + 100;
  obj.b = obj.b + 200;
  console.log(obj)
}

myChangeObj(obj);

console.log(obj)