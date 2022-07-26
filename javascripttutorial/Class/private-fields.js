class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
    }
    
    set radius(value) {
        if (typeof === "number" && value > 0) {
            this.#radius = value;
        } else {
            throw 'The radius must be a positive number';
        }
    }
}



let circle = new Circle(1);
console.log(circle.area);


 