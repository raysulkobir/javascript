let counter = {
    count: 0,
    next: function () {
        return this.count++;
    }
}

console.log(counter.next());



function show(){
    console.log(this === window);
}

show();


"use strict";

function show() {
    console.log(this === undefined);
}

show();


function show() {
    "use strict";
    console.log(this === undefined); // true

    function display() {
        console.log(this === undefined); // true
    }
    display();
}

show();



// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// }

// console.log(car.getBrand()); // Honda


let car = {
    brand: 'Honda',
    getBrand: function () {
        return this.brand;
    }
}





