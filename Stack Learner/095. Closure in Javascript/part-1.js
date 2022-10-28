// www.freecodecamp.org/news/javascript-closures-explained-with-example/

// function person() {
//     var msg = 'hello I am Lick to your personal information';
//     function bodyPart(){
//         console.log(msg);
//     }

//     bodyPart();
// }

// person();

https: function person() {
  var msg = "hello I am Lick to your personal information";
  return function () {
    console.log(msg);
  };
}

var bodyPart = person();
bodyPart();
