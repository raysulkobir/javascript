// function add(x, y) {
//   return x + y;
// }

// console.log(add.length);
// console.log(add.prototype);
// console.log(add(10, 20));





// function add(x, y)
// {
//     console.log(new.target);
//     return x + y;
// }

// let result = add(10, 20);
// let obj = new add(10, 20);
// console.log(result)
// console.log(obj);







// function add(x, y) {
//     if (new.target) {
//         throw "The add function cannot be called as a constructor";
//     }

//     return x + y;
// }

// // console.log(add(10, 20));
// let obj = new add(10, 20);

// console.log(obj);










// Function methods: apply, call, and bind

// let cat = { type: "Cat", sound: "Meow" };
// let dog = { type: "Dog", sound: "Woof" };

// const say = function (massage)
// {
//     console.log(massage);
//     console.log(this.type + " says " + this.sound);
// }

// // say.apply(cat, ["What does a cat say?"]);
// // say.apply(dog, ["What does a dog say?"]);
// say.apply(cat, ["hello?"]);







// let cat = { type: "Cat", sound: "Meow" };
// let dog = { type: "Dog", sound: "Woof" };

// const say = function (massage)
// {
//     console.log(massage);
//     console.log(this.type + " says " + this.sound);
// }

// say.call(cat, ["hello?"]);






// The bind() method

let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};

console.log(car);
let taxiing = car.start.bind();
console.log(taxiing);
console.log(car.start.call(aircraft));

