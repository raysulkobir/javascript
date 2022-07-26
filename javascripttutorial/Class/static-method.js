class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static createAnonymous(gender) {
    let name = gender == "male" ? "Rubel" : "Md.Raysul kobir";
    return new Person(name);
  }
}

let s = Person.createAnonymous("males");
console.log("s", s);
