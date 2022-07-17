//* Implementing JavaScript inheritance using extends and super

// function Animal(legs) {
//     this.legs = legs;
// }

// Animal.prototype.walk = function() {
//     console.log('walking on ' + this.legs + ' legs');
// }

// function Bird(legs) {
//     Animal.call(this, legs);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;


// Bird.prototype.fly = function() {
//     console.log('flying');
// }

// var pigeon = new Bird(2);
// pigeon.walk(); // walking on 2 legs
// pigeon.fly();  // flying



// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log('walking on ' + this.legs + ' legs');
//     }
// }

// class Bird extends Animal {
//     constructor(legs) {
//         super(legs);
//     }
//     fly() {
//         console.log('flying');
//     }
// }


// let bird = new Bird(2);

// bird.walk();
// bird.fly();

//* Inheriting static members

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
    static helloWorld() {
        console.log('Hello World');
    }
}

class Bird extends Animal {
    fly() {
        console.log('flying');
    }
}

console.log(Bird.helloWorld()); // Hello World