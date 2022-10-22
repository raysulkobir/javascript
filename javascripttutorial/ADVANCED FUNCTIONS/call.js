// function add(x, y)
// {
//     return x + y;
// }

// console.log(add instanceof Function);



// function add(x, y)
// {
//     return x + y;
// }

// let result = add(10, 30);
// console.log("Result: ", result)




// function add(x, y) {
//   return x + y;
// }

// let result = add.call(this, 10, 30);
// console.log("Result: ", result);




// Using the JavaScript call() method to chain constructors for an object
function Box(height, width)
{
    this.height = height;
    this.width = width;
}


function Widget(height, width, color)
{
    Box.call(this, height, width);
}

let wi = new Widget('red', 200, 200);
console.log(wi);






// Using the JavaScript call() method for function borrowing