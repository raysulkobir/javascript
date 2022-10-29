let person = {
    // properties
  name: "Md.Rayusl kobir",
  age: 20,

  //method
  personalInfo: function () {
    return this.name;
  },
};

let data = person.personalInfo();
console.log(data);
